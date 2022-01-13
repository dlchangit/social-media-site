import React, { isValidElement, useEffect, useState, useRef, MutableRefObject } from 'react';
import { toArray } from '../../utils/dom';
import styled from 'styled-components'
import { typeface, get_color, respond, breakpoints } from '../../assets/styles';
import { IconChevronDownGreen, IconChevronDownGrey, IconChevronUpGreen } from '../Icon';

const TabContainer = styled.div`
  width: 100%;
  ${respond(['t'], `
    border: 1px solid ${get_color('grey06')};
  `)}


  .tab-content-container:not(:empty) {
    transition: max-height 0.5s ease !important;
    max-height: 1000px;
    margin-bottom: 16px;
    opacity: 1;
    overflow: hidden;
    margin-top: -5px;
  } 

  .tab-content-container:empty {
    transition: max-height 0.5s ease !important;
    max-height: 0px;
    margin-bottom: 16px;
    opacity: 0;
    overflow: hidden;
    margin-top: -5px;
  } 
`

const TabButton = styled.button<{isActive?: boolean}>`
  width: 100%;
  display: flex;

  :hover {
    background-color: ${get_color('grey09')};
    color: ${get_color('green02')};
  }

  ${respond(['t'], `
    ${typeface('body7')}
    padding: 12px 20px 12px 20px;
    background-color: ${get_color('grey07')};
    border: none;
    cursor: pointer;
    border-bottom: 1px solid ${get_color('grey06')};
    position: relative;
    justify-content: center;
    align-items: flex-start;

    :not(:last-of-type) {
      border-right: 1px solid ${get_color('grey06')};
    }

    :hover {
      border-bottom: 1px solid ${get_color('white')};
    }
  `)}

${respond(['m', 's'], `
    ${typeface('title6')}
    padding: 12px 12px 12px 12px;
    background-color: ${get_color('white')};
    border: 1px solid ${get_color('divider')} !important;
    cursor: pointer;
    position: relative;
    justify-content: start;
    align-items: flex-start;
    min-height: 48px;
    border-radius: 5px;
    height: auto;
    text-align: left;
    padding-bottom: 0;

    .tab-button-chevron {
      padding: 0;
      right: 12px;
      top: 12px;
      position: absolute;
      width: 28px;
      height: 28px;
      border: 0;
      background: transparent;

      :hover {
        cursor: pointer;
      }
    }
  `)}

  ${props => props.isActive && `
      background-color: ${get_color('white')} !important;
      border: none;
      border-bottom: white 0px solid !important;
      color: ${get_color('green02')};

      ${respond(['t'], `
        ::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          height: 3px;
          width: 100%;
          background-color: ${get_color('green02')};
        }
      `)}
      ${respond(['m', 's'], `
        margin-bottom: 0px;

        ::before {
          content: '';
          width: 3px;
          height: 46px;
          background-color: ${get_color('green02')};
          margin-left: -12px;
          margin-top: -12px;
          margin-right: 9px;
          border-radius: 5px 0px 0px 5px;
        }
      `)}
  `}
`

const TabButtonRow = styled.div`
  width: 100%;
  display: flex;

  ${respond(['m', 's'], `
    flex-direction: column;
  `)}
`

const TabButtonFilter = styled.div`
  flex-grow: 1;
  border-bottom: ${get_color('grey07')} 1px solid;

`

const TabContent = styled.div<{isActive?: boolean, contentHeight?: number}>`
  width: auto;
  margin-bottom: 16px;
  padding: 25px 12px 16px 12px;
  display: flex;
  font-size: 16px;
  line-height: 30px;

  ${respond(['m', 's'], `
    padding-top: 30px;
  `)}

  ${respond(['s'], `
    font-size: 15px;
    line-height: 24px;
  `)}
`

const TabContentContainer = styled.div<{isActive?: boolean, contentHeight?: number}>`

    transition: all 0.5s ease-in-out;
    border: ${get_color('grey07')} 1px solid;
    overflow: hidden;
    margin-bottom: 16px;
    margin-top: -5px;

    ${props => props && `
      height: ${props.isActive ? props.contentHeight + 'px' : 0 + 'px'};
  `}
`


export interface TabProps {
  defaultKey?: string;
  onChange?: (key?: React.Key) => void;
  children: React.ReactElement[];
  className?: string;
}

export interface TabPaneProps {
  title: string;
  key: React.Key;
}

export const TabPane: React.FC<TabPaneProps> = (props) => {
  return <>{props.children}</>;
};

export const Tab: React.FC<TabProps> = (props) => {
  const { defaultKey, onChange, children, className } = props;
  const [activeKey, setActiveKey] = useState<React.Key | undefined>(defaultKey ?? undefined);
  const [hoverKey, setHoverKey] = useState<React.Key | undefined>(defaultKey ?? undefined);
  const [breakpoint, setBreakPoint] = useState('t');
  const ref = useRef<HTMLDivElement>(null);
  const [bodyHeight, setBodyHeight] = useState<number>(0);
  const contentRef = useRef([] as any[]);

  useEffect(() => {
    function handleResize() {
      let currentBreakPoint = 't';
      if (window.innerWidth >= breakpoints.t) {
        currentBreakPoint = 't';
        if(activeKey === '') {
          setActiveKey(tabs[0].key)
        }
      } else if (window.innerWidth >= breakpoints.s && window.innerWidth < breakpoints.t) {
        currentBreakPoint = 'm';
      } else if (window.innerWidth >= 0 && window.innerWidth < breakpoints.s) {
        currentBreakPoint = 's';
      }
      setBreakPoint(currentBreakPoint);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
  })

  const tabs = toArray(children)
    .filter((node) => isValidElement(node))
    .map((node: React.ReactElement<TabPaneProps>) => {
      return {
        ...node.props,
        node,
        key: node.key as React.Key | undefined,
      };
    })
    .filter((it) => it);

  useEffect(() => {
    onChange && onChange(activeKey);
  }, [activeKey]);

  const handleTabChange = (key?: React.Key) => {
    if(key !== activeKey) {
      setActiveKey(key);
    } else {
      if(breakpoint !== 't')
        setActiveKey('');
    }

  };

  useEffect(() => {
    if (ref.current != null) {
      setBodyHeight(ref.current.clientHeight);
      console.log(ref.current.clientHeight)

    }
  }, [])

  return (
    <TabContainer className={className}>
      {breakpoint === 't' && (
        <>
          <TabButtonRow>
          {tabs.map((tab, idx) => (
            <TabButton
              key={idx}
              onClick={() => handleTabChange(tab.key)}
              isActive={tab.key === activeKey}
            >
              {/* <Typography size={5} weight={'light'}> */}
                {tab.title}
              {/* </Typography> */}
            </TabButton>
          ))}
          <TabButtonFilter/>
        </TabButtonRow>
        {tabs.filter((tab) => tab.key === activeKey).map((tab, idx) => <TabContent key={idx}>{tab.node}</TabContent>)}
      </>
    )}
    {breakpoint !== 't' && (
        <>
          <TabButtonRow>
          {tabs.map((tab, idx) => (
            <div key={idx}>
              <TabButton
                onClick={() => handleTabChange(tab.key)}
                isActive={tab.key === activeKey}
                onMouseOver={() => setHoverKey(tab.key)}
                onMouseOut={() => setHoverKey('')}
              >
                {/* <Typography size={5} weight={'light'}> */}
                  {tab.title}
                {/* </Typography> */}
                <div className='tab-button-chevron'>
                  {activeKey === tab.key && <IconChevronUpGreen />}
                  {activeKey !== tab.key && hoverKey !== tab.key && <IconChevronDownGrey />}
                  {activeKey !== tab.key && hoverKey === tab.key && <IconChevronDownGreen />}
                </div>
              </TabButton>
              {/* <div className='tab-content-container'> */}
                <TabContentContainer isActive={tab.key === activeKey} contentHeight={contentRef.current[idx]?.offsetHeight}>
                  <TabContent ref={el => (contentRef.current[idx] = el)}>
                    {tab.node}
                  </TabContent>
                </TabContentContainer>
              {/* </div> */}
            </div>
          ))}
        </TabButtonRow>
      </>
    )}
    </TabContainer>
  );
};
