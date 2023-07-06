import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      primary: string;
    };
    colors: {
      primary: string;
      secondary: string;
      gray600: string;
      gray300: string;
      gray150: string;
      gray100: string;
      gray0: string;
      white: string;
      feedback: {
        negative: string;
        warning: string;
        sucess: string;
        information: string;
      };
    };
  }
}
