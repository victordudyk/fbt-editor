import ProjectConfiguration from "@entities/project/ProjectConfiguration";
import * as AWS from "aws-sdk";
import { Credentials } from "aws-sdk";
import ProjectProvider from "./ProjectProvider";

export default class S3BucketProvider {
  public projectProvider: ProjectProvider = new ProjectProvider();

  createS3Bucket(projectId: string): AWS.S3 {
    const projectConfiguration: ProjectConfiguration = this.projectProvider.getProject(
      projectId
    );
    AWS.config.credentials = new Credentials(
      projectConfiguration.accessKeyId,
      projectConfiguration.secretAccessKey
    );
    const s3 = new AWS.S3({
      apiVersion: "2006-03-01",
    });
    return s3;
  }
}
