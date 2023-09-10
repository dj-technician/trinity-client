import {HeaderModule} from "~/model/Modules";

export class BlogInfo {
  headerInfo: Header;
}

export class Header {
  name: string;
  jobName: string;
  subJobName: string;
  corpName: string;
  location: string;
  description: string;
  module: HeaderModule;
}

