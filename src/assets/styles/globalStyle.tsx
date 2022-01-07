import { createGlobalStyle } from "styled-components";
// import { get_color } from "./mixins";

import FlamaBasic from "../fonts/Flama-Basic.ttf";
import FlamaMedium from "../fonts/Flama-Medium.ttf";
import OpenSansRegular from "../fonts/OpenSans-Regular.ttf";
import OpenSansBold from "../fonts/OpenSans-Bold.ttf";
import OpenSansSemiBold from "../fonts/OpenSans-SemiBold.ttf";

export default createGlobalStyle`

    @font-face{
      font-family:'Flama';
      font-style:normal;
      font-weight:400;
      src:local("Flama Basic"),local("Flama-Basic"),url(${FlamaBasic}) format("truetype")
    }

    @font-face{
      font-family:'Flama';
      font-style:normal;
      font-weight:500;
      src:local("Flama Basic"),local("Flama-Basic"),url(${FlamaMedium}) format("truetype")
    }

    @font-face{
      font-family:'Open Sans';
      font-style:normal;
      font-weight:400;
      src:local("Open Sans Regular"),local("OpenSans-Regular"),url("${OpenSansRegular}") format("truetype")
    }

    @font-face{
      font-family:'Open Sans';
      font-style:normal;
      font-weight:500;
      src:local("Open Sans Bold"),local("OpenSans-Bold"),url("${OpenSansBold}") format("truetype")
    }

    @font-face{
      font-family:'Open Sans';
      font-style:normal;
      font-weight:600;
      src:local("Open Sans SemiBold"),local("OpenSans-SemiBold"),url("${OpenSansSemiBold}") format("truetype")
    }

`;
