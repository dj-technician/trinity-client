import {HeaderModule} from "~/model/Modules";

export class BlogInfo {
  meta: Meta;
  header: Header;

  constructor(meta: Meta, header: Header) {
    this.header = header;
    this.meta = meta;
  }
}

export class Meta {
  userId: string;
  userName: string;

  constructor(userId: string, userName: string) {
    this.userId = userId;
    this.userName = userName;
  }
}

export class Header {
  name: string;
  jobName: string;
  subJobName: string;
  corpName: string;
  location: string;
  description: string;
  module: HeaderModule;

  constructor(name: string, jobName: string, subJobName: string, corpName: string, location: string, description: string, module: HeaderModule) {
    this.name = name;
    this.jobName = jobName;
    this.subJobName = subJobName;
    this.corpName = corpName;
    this.location = location;
    this.description = description;
    this.module = module;
  }
}

