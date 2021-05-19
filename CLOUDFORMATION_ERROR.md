# Cloudformation error from the console

```bash
→ amplify push --y
✔ Successfully pulled backend environment dev from the cloud.

Current Environment: dev

| Category | Resource name             | Operation | Provider plugin   |
| -------- | ------------------------- | --------- | ----------------- |
| Auth     | theticket2invoice4c18b3b3 | Create    | awscloudformation |
| Storage  | s319058846                | Create    | awscloudformation |
| Api      | theticket2invoice         | Create    | awscloudformation |
| Function | theticket2invoice7def2a70 | Create    | awscloudformation |

GraphQL schema compiled successfully.

Edit your schema at /Users/horacio/workspace/ticket2invoice/amplify/backend/api/theticket2invoice/schema.graphql or place .graphql files in a directory at /Users/horacio/workspace/ticket2invoice/amplify/backend/api/theticket2invoice/schema
⠦ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS amplify-theticket2invoice-dev-135843 AWS::CloudFormation::Stack Wed May 19 2021 14:10:25 GMT+0200 (Central European Summer Time) User Initiated
⠏ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UpdateRolesWithIDPFunctionRole AWS::IAM::Role Wed May 19 2021 14:10:31 GMT+0200 (Central European Summer Time)
⠧ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS storages319058846              AWS::CloudFormation::Stack Wed May 19 2021 14:10:31 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS auththeticket2invoice4c18b3b3  AWS::CloudFormation::Stack Wed May 19 2021 14:10:31 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS storages319058846              AWS::CloudFormation::Stack Wed May 19 2021 14:10:32 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_IN_PROGRESS UpdateRolesWithIDPFunctionRole AWS::IAM::Role             Wed May 19 2021 14:10:32 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_IN_PROGRESS auththeticket2invoice4c18b3b3  AWS::CloudFormation::Stack Wed May 19 2021 14:10:32 GMT+0200 (Central European Summer Time) Resource creation Initiated
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-theticket2invoice-dev-135843-auththeticket2invoice4c18b3b3-1OGUYVDWP2BDG AWS::CloudFormation::Stack Wed May 19 2021 14:10:32 GMT+0200 (Central European Summer Time) User Initiated
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-theticket2invoice-dev-135843-storages319058846-19E2YDTQN3O2L AWS::CloudFormation::Stack Wed May 19 2021 14:10:32 GMT+0200 (Central European Summer Time) User Initiated
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS SNSRole AWS::IAM::Role Wed May 19 2021 14:10:40 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS SNSRole AWS::IAM::Role Wed May 19 2021 14:10:40 GMT+0200 (Central European Summer Time) Resource creation Initiated
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS S3Bucket AWS::S3::Bucket Wed May 19 2021 14:10:37 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS S3Bucket AWS::S3::Bucket Wed May 19 2021 14:10:39 GMT+0200 (Central European Summer Time) Resource creation Initiated
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE UpdateRolesWithIDPFunctionRole AWS::IAM::Role Wed May 19 2021 14:10:53 GMT+0200 (Central European Summer Time)
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE SNSRole AWS::IAM::Role Wed May 19 2021 14:11:00 GMT+0200 (Central European Summer Time)
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE S3Bucket AWS::S3::Bucket Wed May 19 2021 14:11:00 GMT+0200 (Central European Summer Time)
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPool AWS::Cognito::UserPool Wed May 19 2021 14:11:04 GMT+0200 (Central European Summer Time)
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS S3AuthPublicPolicy    AWS::IAM::Policy Wed May 19 2021 14:11:03 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS S3AuthPrivatePolicy   AWS::IAM::Policy Wed May 19 2021 14:11:03 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS S3GuestPublicPolicy   AWS::IAM::Policy Wed May 19 2021 14:11:04 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS S3AuthUploadPolicy    AWS::IAM::Policy Wed May 19 2021 14:11:04 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS S3AuthPrivatePolicy   AWS::IAM::Policy Wed May 19 2021 14:11:04 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_IN_PROGRESS S3AuthProtectedPolicy AWS::IAM::Policy Wed May 19 2021 14:11:04 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS S3GuestPublicPolicy   AWS::IAM::Policy Wed May 19 2021 14:11:05 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_IN_PROGRESS S3AuthUploadPolicy    AWS::IAM::Policy Wed May 19 2021 14:11:05 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_IN_PROGRESS S3AuthReadPolicy      AWS::IAM::Policy Wed May 19 2021 14:11:05 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS S3GuestReadPolicy     AWS::IAM::Policy Wed May 19 2021 14:11:05 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS S3AuthProtectedPolicy AWS::IAM::Policy Wed May 19 2021 14:11:06 GMT+0200 (Central European Summer Time) Resource creation Initiated
⠧ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPool AWS::Cognito::UserPool Wed May 19 2021 14:11:06 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_COMPLETE    UserPool AWS::Cognito::UserPool Wed May 19 2021 14:11:06 GMT+0200 (Central European Summer Time)
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClient    AWS::Cognito::UserPoolClient Wed May 19 2021 14:11:09 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS UserPoolClientWeb AWS::Cognito::UserPoolClient Wed May 19 2021 14:11:09 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS UserPoolClient    AWS::Cognito::UserPoolClient Wed May 19 2021 14:11:11 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_COMPLETE    UserPoolClient    AWS::Cognito::UserPoolClient Wed May 19 2021 14:11:11 GMT+0200 (Central European Summer Time)
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS S3AuthReadPolicy   AWS::IAM::Policy Wed May 19 2021 14:11:06 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_IN_PROGRESS S3GuestReadPolicy  AWS::IAM::Policy Wed May 19 2021 14:11:06 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_IN_PROGRESS S3AuthPublicPolicy AWS::IAM::Policy Wed May 19 2021 14:11:07 GMT+0200 (Central European Summer Time) Resource creation Initiated
⠧ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientWeb AWS::Cognito::UserPoolClient Wed May 19 2021 14:11:11 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_COMPLETE    UserPoolClientWeb AWS::Cognito::UserPoolClient Wed May 19 2021 14:11:11 GMT+0200 (Central European Summer Time)
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientRole AWS::IAM::Role Wed May 19 2021 14:11:14 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS UserPoolClientRole AWS::IAM::Role Wed May 19 2021 14:11:14 GMT+0200 (Central European Summer Time) Resource creation Initiated
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE S3AuthPrivatePolicy   AWS::IAM::Policy Wed May 19 2021 14:11:22 GMT+0200 (Central European Summer Time)
CREATE_COMPLETE S3GuestPublicPolicy   AWS::IAM::Policy Wed May 19 2021 14:11:22 GMT+0200 (Central European Summer Time)
CREATE_COMPLETE S3AuthUploadPolicy    AWS::IAM::Policy Wed May 19 2021 14:11:23 GMT+0200 (Central European Summer Time)
CREATE_COMPLETE S3AuthProtectedPolicy AWS::IAM::Policy Wed May 19 2021 14:11:23 GMT+0200 (Central European Summer Time)
CREATE_COMPLETE S3AuthReadPolicy      AWS::IAM::Policy Wed May 19 2021 14:11:24 GMT+0200 (Central European Summer Time)
CREATE_COMPLETE S3GuestReadPolicy     AWS::IAM::Policy Wed May 19 2021 14:11:24 GMT+0200 (Central European Summer Time)
CREATE_COMPLETE S3AuthPublicPolicy    AWS::IAM::Policy Wed May 19 2021 14:11:24 GMT+0200 (Central European Summer Time)
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-theticket2invoice-dev-135843-storages319058846-19E2YDTQN3O2L AWS::CloudFormation::Stack Wed May 19 2021 14:11:26 GMT+0200 (Central European Summer Time)
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE storages319058846 AWS::CloudFormation::Stack Wed May 19 2021 14:11:34 GMT+0200 (Central European Summer Time)
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    UserPoolClientRole   AWS::IAM::Role        Wed May 19 2021 14:11:32 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS UserPoolClientLambda AWS::Lambda::Function Wed May 19 2021 14:11:35 GMT+0200 (Central European Summer Time)
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientLambda AWS::Lambda::Function Wed May 19 2021 14:11:38 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_COMPLETE    UserPoolClientLambda AWS::Lambda::Function Wed May 19 2021 14:11:38 GMT+0200 (Central European Summer Time)
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientLambdaPolicy AWS::IAM::Policy Wed May 19 2021 14:11:42 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS UserPoolClientLambdaPolicy AWS::IAM::Policy Wed May 19 2021 14:11:43 GMT+0200 (Central European Summer Time) Resource creation Initiated
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE UserPoolClientLambdaPolicy AWS::IAM::Policy Wed May 19 2021 14:12:00 GMT+0200 (Central European Summer Time)
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientLogPolicy AWS::IAM::Policy Wed May 19 2021 14:12:03 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS UserPoolClientLogPolicy AWS::IAM::Policy Wed May 19 2021 14:12:04 GMT+0200 (Central European Summer Time) Resource creation Initiated
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE UserPoolClientLogPolicy AWS::IAM::Policy Wed May 19 2021 14:12:22 GMT+0200 (Central European Summer Time)
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientInputs Custom::LambdaCallout Wed May 19 2021 14:12:26 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS UserPoolClientInputs Custom::LambdaCallout Wed May 19 2021 14:12:30 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_COMPLETE    UserPoolClientInputs Custom::LambdaCallout Wed May 19 2021 14:12:30 GMT+0200 (Central European Summer Time)
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS IdentityPool AWS::Cognito::IdentityPool Wed May 19 2021 14:12:33 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS IdentityPool AWS::Cognito::IdentityPool Wed May 19 2021 14:12:35 GMT+0200 (Central European Summer Time) Resource creation Initiated
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE IdentityPool AWS::Cognito::IdentityPool Wed May 19 2021 14:12:36 GMT+0200 (Central European Summer Time)
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS IdentityPoolRoleMap AWS::Cognito::IdentityPoolRoleAttachment Wed May 19 2021 14:12:39 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS IdentityPoolRoleMap AWS::Cognito::IdentityPoolRoleAttachment Wed May 19 2021 14:12:41 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_COMPLETE    IdentityPoolRoleMap AWS::Cognito::IdentityPoolRoleAttachment Wed May 19 2021 14:12:41 GMT+0200 (Central European Summer Time)
⠧ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-theticket2invoice-dev-135843-auththeticket2invoice4c18b3b3-1OGUYVDWP2BDG AWS::CloudFormation::Stack Wed May 19 2021 14:12:44 GMT+0200 (Central European Summer Time)
⠇ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE auththeticket2invoice4c18b3b3 AWS::CloudFormation::Stack Wed May 19 2021 14:12:51 GMT+0200 (Central European Summer Time)
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UpdateRolesWithIDPFunction AWS::Lambda::Function      Wed May 19 2021 14:12:53 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS apitheticket2invoice       AWS::CloudFormation::Stack Wed May 19 2021 14:12:53 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS apitheticket2invoice       AWS::CloudFormation::Stack Wed May 19 2021 14:12:55 GMT+0200 (Central European Summer Time) Resource creation Initiated
⠧ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-theticket2invoice-dev-135843-apitheticket2invoice-1FIG5GYC3Z4J AWS::CloudFormation::Stack Wed May 19 2021 14:12:54 GMT+0200 (Central European Summer Time) User Initiated
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS GraphQLAPI AWS::AppSync::GraphQLApi Wed May 19 2021 14:13:00 GMT+0200 (Central European Summer Time)
⠇ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UpdateRolesWithIDPFunction AWS::Lambda::Function Wed May 19 2021 14:13:01 GMT+0200 (Central European Summer Time) Resource creation Initiated
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    UpdateRolesWithIDPFunction        AWS::Lambda::Function Wed May 19 2021 14:13:01 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS UpdateRolesWithIDPFunctionOutputs Custom::LambdaCallout Wed May 19 2021 14:13:05 GMT+0200 (Central European Summer Time)
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS GraphQLAPI     AWS::AppSync::GraphQLApi Wed May 19 2021 14:13:02 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_COMPLETE    GraphQLAPI     AWS::AppSync::GraphQLApi Wed May 19 2021 14:13:03 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS GraphQLAPIKey  AWS::AppSync::ApiKey     Wed May 19 2021 14:13:05 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS NoneDataSource AWS::AppSync::DataSource Wed May 19 2021 14:13:05 GMT+0200 (Central European Summer Time)
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UpdateRolesWithIDPFunctionOutputs Custom::LambdaCallout Wed May 19 2021 14:13:08 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_COMPLETE    UpdateRolesWithIDPFunctionOutputs Custom::LambdaCallout Wed May 19 2021 14:13:08 GMT+0200 (Central European Summer Time)
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS GraphQLAPIKey  AWS::AppSync::ApiKey        Wed May 19 2021 14:13:06 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_COMPLETE    GraphQLAPIKey  AWS::AppSync::ApiKey        Wed May 19 2021 14:13:06 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS GraphQLSchema  AWS::AppSync::GraphQLSchema Wed May 19 2021 14:13:07 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS NoneDataSource AWS::AppSync::DataSource    Wed May 19 2021 14:13:07 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_COMPLETE    NoneDataSource AWS::AppSync::DataSource    Wed May 19 2021 14:13:07 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS GraphQLSchema  AWS::AppSync::GraphQLSchema Wed May 19 2021 14:13:09 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_COMPLETE    GraphQLSchema  AWS::AppSync::GraphQLSchema Wed May 19 2021 14:13:10 GMT+0200 (Central European Summer Time)
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS Company AWS::CloudFormation::Stack Wed May 19 2021 14:13:12 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS Ticket  AWS::CloudFormation::Stack Wed May 19 2021 14:13:12 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS Company AWS::CloudFormation::Stack Wed May 19 2021 14:13:13 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_IN_PROGRESS Ticket  AWS::CloudFormation::Stack Wed May 19 2021 14:13:14 GMT+0200 (Central European Summer Time) Resource creation Initiated
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-theticket2invoice-dev-135843-apitheticket2invoice-1FIG5GYC3Z4J-Ticket-QWFH6R2ORFOA AWS::CloudFormation::Stack Wed May 19 2021 14:13:13 GMT+0200 (Central European Summer Time) User Initiated
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-theticket2invoice-dev-135843-apitheticket2invoice-1FIG5GYC3Z4J-Company-T6Z0FA5R5ETQ AWS::CloudFormation::Stack Wed May 19 2021 14:13:13 GMT+0200 (Central European Summer Time) User Initiated
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS TicketIAMRole AWS::IAM::Role       Wed May 19 2021 14:13:20 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS TicketTable   AWS::DynamoDB::Table Wed May 19 2021 14:13:20 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS TicketTable   AWS::DynamoDB::Table Wed May 19 2021 14:13:20 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_IN_PROGRESS TicketIAMRole AWS::IAM::Role       Wed May 19 2021 14:13:20 GMT+0200 (Central European Summer Time) Resource creation Initiated
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS CompanyTable   AWS::DynamoDB::Table Wed May 19 2021 14:13:19 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS CompanyIAMRole AWS::IAM::Role       Wed May 19 2021 14:13:19 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS CompanyTable   AWS::DynamoDB::Table Wed May 19 2021 14:13:20 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_IN_PROGRESS CompanyIAMRole AWS::IAM::Role       Wed May 19 2021 14:13:20 GMT+0200 (Central European Summer Time) Resource creation Initiated
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE TicketIAMRole AWS::IAM::Role Wed May 19 2021 14:13:39 GMT+0200 (Central European Summer Time)
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE CompanyIAMRole AWS::IAM::Role Wed May 19 2021 14:13:39 GMT+0200 (Central European Summer Time)
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS TicketDataSource     AWS::AppSync::DataSource Wed May 19 2021 14:13:42 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS TicketDataSource     AWS::AppSync::DataSource Wed May 19 2021 14:13:44 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_COMPLETE    TicketDataSource     AWS::AppSync::DataSource Wed May 19 2021 14:13:44 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS DeleteTicketResolver AWS::AppSync::Resolver   Wed May 19 2021 14:13:46 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS ListTicketResolver   AWS::AppSync::Resolver   Wed May 19 2021 14:13:46 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS CreateTicketResolver AWS::AppSync::Resolver   Wed May 19 2021 14:13:46 GMT+0200 (Central European Summer Time)
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS CompanyDataSource     AWS::AppSync::DataSource Wed May 19 2021 14:13:42 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS CompanyDataSource     AWS::AppSync::DataSource Wed May 19 2021 14:13:44 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_COMPLETE    CompanyDataSource     AWS::AppSync::DataSource Wed May 19 2021 14:13:44 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS CreateCompanyResolver AWS::AppSync::Resolver   Wed May 19 2021 14:13:46 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS DeleteCompanyResolver AWS::AppSync::Resolver   Wed May 19 2021 14:13:46 GMT+0200 (Central European Summer Time)
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UpdateTicketResolver AWS::AppSync::Resolver Wed May 19 2021 14:13:46 GMT+0200 (Central European Summer Time)
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UpdateCompanyResolver AWS::AppSync::Resolver Wed May 19 2021 14:13:46 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS ListCompanyResolver   AWS::AppSync::Resolver Wed May 19 2021 14:13:46 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS GetCompanyResolver    AWS::AppSync::Resolver Wed May 19 2021 14:13:47 GMT+0200 (Central European Summer Time)
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS GetTicketResolver    AWS::AppSync::Resolver Wed May 19 2021 14:13:47 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS UpdateTicketResolver AWS::AppSync::Resolver Wed May 19 2021 14:13:48 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_IN_PROGRESS DeleteTicketResolver AWS::AppSync::Resolver Wed May 19 2021 14:13:48 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_COMPLETE    UpdateTicketResolver AWS::AppSync::Resolver Wed May 19 2021 14:13:48 GMT+0200 (Central European Summer Time)
CREATE_COMPLETE    DeleteTicketResolver AWS::AppSync::Resolver Wed May 19 2021 14:13:48 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS CreateTicketResolver AWS::AppSync::Resolver Wed May 19 2021 14:13:49 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_COMPLETE    CreateTicketResolver AWS::AppSync::Resolver Wed May 19 2021 14:13:49 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS GetTicketResolver    AWS::AppSync::Resolver Wed May 19 2021 14:13:49 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_IN_PROGRESS ListTicketResolver   AWS::AppSync::Resolver Wed May 19 2021 14:13:49 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_COMPLETE    GetTicketResolver    AWS::AppSync::Resolver Wed May 19 2021 14:13:49 GMT+0200 (Central European Summer Time)
CREATE_COMPLETE    ListTicketResolver   AWS::AppSync::Resolver Wed May 19 2021 14:13:49 GMT+0200 (Central European Summer Time)
CREATE_COMPLETE    TicketTable          AWS::DynamoDB::Table   Wed May 19 2021 14:13:51 GMT+0200 (Central European Summer Time)
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS CreateCompanyResolver AWS::AppSync::Resolver Wed May 19 2021 14:13:48 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_COMPLETE    CreateCompanyResolver AWS::AppSync::Resolver Wed May 19 2021 14:13:48 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS UpdateCompanyResolver AWS::AppSync::Resolver Wed May 19 2021 14:13:48 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_IN_PROGRESS DeleteCompanyResolver AWS::AppSync::Resolver Wed May 19 2021 14:13:48 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_COMPLETE    UpdateCompanyResolver AWS::AppSync::Resolver Wed May 19 2021 14:13:48 GMT+0200 (Central European Summer Time)
CREATE_COMPLETE    DeleteCompanyResolver AWS::AppSync::Resolver Wed May 19 2021 14:13:49 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS GetCompanyResolver    AWS::AppSync::Resolver Wed May 19 2021 14:13:49 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_IN_PROGRESS ListCompanyResolver   AWS::AppSync::Resolver Wed May 19 2021 14:13:49 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_COMPLETE    ListCompanyResolver   AWS::AppSync::Resolver Wed May 19 2021 14:13:49 GMT+0200 (Central European Summer Time)
CREATE_COMPLETE    GetCompanyResolver    AWS::AppSync::Resolver Wed May 19 2021 14:13:49 GMT+0200 (Central European Summer Time)
CREATE_COMPLETE    CompanyTable          AWS::DynamoDB::Table   Wed May 19 2021 14:13:50 GMT+0200 (Central European Summer Time)
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-theticket2invoice-dev-135843-apitheticket2invoice-1FIG5GYC3Z4J-Ticket-QWFH6R2ORFOA AWS::CloudFormation::Stack Wed May 19 2021 14:13:55 GMT+0200 (Central European Summer Time)
⠧ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-theticket2invoice-dev-135843-apitheticket2invoice-1FIG5GYC3Z4J-Company-T6Z0FA5R5ETQ AWS::CloudFormation::Stack Wed May 19 2021 14:13:53 GMT+0200 (Central European Summer Time)
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE Company AWS::CloudFormation::Stack Wed May 19 2021 14:14:00 GMT+0200 (Central European Summer Time)
CREATE_COMPLETE Ticket  AWS::CloudFormation::Stack Wed May 19 2021 14:14:01 GMT+0200 (Central European Summer Time)
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS CustomResourcesjson AWS::CloudFormation::Stack Wed May 19 2021 14:14:04 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS CustomResourcesjson AWS::CloudFormation::Stack Wed May 19 2021 14:14:05 GMT+0200 (Central European Summer Time) Resource creation Initiated
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-theticket2invoice-dev-135843-apitheticket2invoice-1FIG5GYC-CustomResourcesjson-RN1SBTXYN6P1 AWS::CloudFormation::Stack Wed May 19 2021 14:14:05 GMT+0200 (Central European Summer Time) User Initiated
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE CustomResourcesjson AWS::CloudFormation::Stack Wed May 19 2021 14:14:16 GMT+0200 (Central European Summer Time)
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-theticket2invoice-dev-135843-apitheticket2invoice-1FIG5GYC3Z4J AWS::CloudFormation::Stack Wed May 19 2021 14:14:18 GMT+0200 (Central European Summer Time)
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE apitheticket2invoice AWS::CloudFormation::Stack Wed May 19 2021 14:14:33 GMT+0200 (Central European Summer Time)
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS functiontheticket2invoice7def2a70 AWS::CloudFormation::Stack Wed May 19 2021 14:14:36 GMT+0200 (Central European Summer Time)
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_FAILED               functiontheticket2invoice7def2a70    AWS::CloudFormation::Stack Wed May 19 2021 14:14:37 GMT+0200 (Central European Summer Time) Template format error: Unresolved resource dependencies [apitheticket2invoiceGraphQLAPIKeyOutput] in the Resources block of the template
UPDATE_ROLLBACK_IN_PROGRESS amplify-theticket2invoice-dev-135843 AWS::CloudFormation::Stack Wed May 19 2021 14:14:37 GMT+0200 (Central European Summer Time) The following resource(s) failed to create: [functiontheticket2invoice7def2a70].
⠇ Updating resources in the cloud. This may take a few minutes...

UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS amplify-theticket2invoice-dev-135843 AWS::CloudFormation::Stack Wed May 19 2021 14:14:55 GMT+0200 (Central European Summer Time)
⠏ Updating resources in the cloud. This may take a few minutes...

DELETE_IN_PROGRESS UpdateRolesWithIDPFunctionOutputs AWS::CloudFormation::CustomResource Wed May 19 2021 14:14:56 GMT+0200 (Central European Summer Time)
DELETE_COMPLETE    functiontheticket2invoice7def2a70 AWS::CloudFormation::Stack          Wed May 19 2021 14:14:56 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS storages319058846                 AWS::CloudFormation::Stack          Wed May 19 2021 14:14:57 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS apitheticket2invoice              AWS::CloudFormation::Stack          Wed May 19 2021 14:14:57 GMT+0200 (Central European Summer Time)
DELETE_COMPLETE    UpdateRolesWithIDPFunctionOutputs AWS::CloudFormation::CustomResource Wed May 19 2021 14:14:59 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS UpdateRolesWithIDPFunction        AWS::Lambda::Function               Wed May 19 2021 14:15:00 GMT+0200 (Central European Summer Time)
⠸ Updating resources in the cloud. This may take a few minutes...

DELETE_IN_PROGRESS amplify-theticket2invoice-dev-135843-apitheticket2invoice-1FIG5GYC3Z4J AWS::CloudFormation::Stack Wed May 19 2021 14:14:57 GMT+0200 (Central European Summer Time) User Initiated
DELETE_IN_PROGRESS CustomResourcesjson                                                    AWS::CloudFormation::Stack Wed May 19 2021 14:15:00 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS GraphQLAPIKey                                                          AWS::AppSync::ApiKey       Wed May 19 2021 14:15:01 GMT+0200 (Central European Summer Time)
⠼ Updating resources in the cloud. This may take a few minutes...

DELETE_IN_PROGRESS amplify-theticket2invoice-dev-135843-storages319058846-19E2YDTQN3O2L AWS::CloudFormation::Stack Wed May 19 2021 14:14:57 GMT+0200 (Central European Summer Time) User Initiated
DELETE_IN_PROGRESS S3AuthProtectedPolicy                                                AWS::IAM::Policy           Wed May 19 2021 14:15:00 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS S3GuestReadPolicy                                                    AWS::IAM::Policy           Wed May 19 2021 14:15:00 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS S3AuthReadPolicy                                                     AWS::IAM::Policy           Wed May 19 2021 14:15:00 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS S3AuthPublicPolicy                                                   AWS::IAM::Policy           Wed May 19 2021 14:15:00 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS S3AuthPrivatePolicy                                                  AWS::IAM::Policy           Wed May 19 2021 14:15:00 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS S3GuestPublicPolicy                                                  AWS::IAM::Policy           Wed May 19 2021 14:15:00 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS S3AuthUploadPolicy                                                   AWS::IAM::Policy           Wed May 19 2021 14:15:00 GMT+0200 (Central European Summer Time)
DELETE_COMPLETE    S3GuestReadPolicy                                                    AWS::IAM::Policy           Wed May 19 2021 14:15:00 GMT+0200 (Central European Summer Time)
DELETE_COMPLETE    S3AuthPrivatePolicy                                                  AWS::IAM::Policy           Wed May 19 2021 14:15:00 GMT+0200 (Central European Summer Time)
DELETE_COMPLETE    S3AuthReadPolicy                                                     AWS::IAM::Policy           Wed May 19 2021 14:15:01 GMT+0200 (Central European Summer Time)
DELETE_COMPLETE    S3GuestPublicPolicy                                                  AWS::IAM::Policy           Wed May 19 2021 14:15:01 GMT+0200 (Central European Summer Time)
DELETE_COMPLETE    S3AuthUploadPolicy                                                   AWS::IAM::Policy           Wed May 19 2021 14:15:01 GMT+0200 (Central European Summer Time)
DELETE_COMPLETE    S3AuthProtectedPolicy                                                AWS::IAM::Policy           Wed May 19 2021 14:15:01 GMT+0200 (Central European Summer Time)
DELETE_COMPLETE    S3AuthPublicPolicy                                                   AWS::IAM::Policy           Wed May 19 2021 14:15:01 GMT+0200 (Central European Summer Time)
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    amplify-theticket2invoice-dev-135843-apitheticket2invoice-1FIG5GYC-CustomResourcesjson-RN1SBTXYN6P1 AWS::CloudFormation::Stack Wed May 19 2021 14:14:12 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS amplify-theticket2invoice-dev-135843-apitheticket2invoice-1FIG5GYC-CustomResourcesjson-RN1SBTXYN6P1 AWS::CloudFormation::Stack Wed May 19 2021 14:15:01 GMT+0200 (Central European Summer Time) User Initiated
⠼ Updating resources in the cloud. This may take a few minutes...

DELETE_COMPLETE GraphQLAPIKey AWS::AppSync::ApiKey Wed May 19 2021 14:15:02 GMT+0200 (Central European Summer Time)
⠴ Updating resources in the cloud. This may take a few minutes...

DELETE_SKIPPED  S3Bucket                                                             AWS::S3::Bucket            Wed May 19 2021 14:15:03 GMT+0200 (Central European Summer Time)
DELETE_COMPLETE amplify-theticket2invoice-dev-135843-storages319058846-19E2YDTQN3O2L AWS::CloudFormation::Stack Wed May 19 2021 14:15:04 GMT+0200 (Central European Summer Time)
⠧ Updating resources in the cloud. This may take a few minutes...

DELETE_COMPLETE amplify-theticket2invoice-dev-135843-apitheticket2invoice-1FIG5GYC-CustomResourcesjson-RN1SBTXYN6P1 AWS::CloudFormation::Stack Wed May 19 2021 14:15:05 GMT+0200 (Central European Summer Time)
⠋ Updating resources in the cloud. This may take a few minutes...

DELETE_COMPLETE    storages319058846              AWS::CloudFormation::Stack Wed May 19 2021 14:15:08 GMT+0200 (Central European Summer Time)
DELETE_COMPLETE    UpdateRolesWithIDPFunction     AWS::Lambda::Function      Wed May 19 2021 14:15:10 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS UpdateRolesWithIDPFunctionRole AWS::IAM::Role             Wed May 19 2021 14:15:10 GMT+0200 (Central European Summer Time)
⠇ Updating resources in the cloud. This may take a few minutes...

DELETE_COMPLETE CustomResourcesjson AWS::CloudFormation::Stack Wed May 19 2021 14:15:11 GMT+0200 (Central European Summer Time)
⠋ Updating resources in the cloud. This may take a few minutes...

DELETE_COMPLETE UpdateRolesWithIDPFunctionRole AWS::IAM::Role Wed May 19 2021 14:15:13 GMT+0200 (Central European Summer Time)
⠸ Updating resources in the cloud. This may take a few minutes...

DELETE_IN_PROGRESS Company AWS::CloudFormation::Stack Wed May 19 2021 14:15:12 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS Ticket  AWS::CloudFormation::Stack Wed May 19 2021 14:15:12 GMT+0200 (Central European Summer Time)
⠧ Updating resources in the cloud. This may take a few minutes...

DELETE_IN_PROGRESS amplify-theticket2invoice-dev-135843-apitheticket2invoice-1FIG5GYC3Z4J-Ticket-QWFH6R2ORFOA AWS::CloudFormation::Stack Wed May 19 2021 14:15:12 GMT+0200 (Central European Summer Time) User Initiated
DELETE_IN_PROGRESS ListTicketResolver                                                                         AWS::AppSync::Resolver     Wed May 19 2021 14:15:16 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS DeleteTicketResolver                                                                       AWS::AppSync::Resolver     Wed May 19 2021 14:15:16 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS CreateTicketResolver                                                                       AWS::AppSync::Resolver     Wed May 19 2021 14:15:16 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS UpdateTicketResolver                                                                       AWS::AppSync::Resolver     Wed May 19 2021 14:15:16 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS TicketTable                                                                                AWS::DynamoDB::Table       Wed May 19 2021 14:15:16 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS GetTicketResolver                                                                          AWS::AppSync::Resolver     Wed May 19 2021 14:15:16 GMT+0200 (Central European Summer Time)
⠏ Updating resources in the cloud. This may take a few minutes...

DELETE_IN_PROGRESS amplify-theticket2invoice-dev-135843-apitheticket2invoice-1FIG5GYC3Z4J-Company-T6Z0FA5R5ETQ AWS::CloudFormation::Stack Wed May 19 2021 14:15:12 GMT+0200 (Central European Summer Time) User Initiated
DELETE_IN_PROGRESS CompanyTable                                                                                AWS::DynamoDB::Table       Wed May 19 2021 14:15:15 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS UpdateCompanyResolver                                                                       AWS::AppSync::Resolver     Wed May 19 2021 14:15:15 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS DeleteCompanyResolver                                                                       AWS::AppSync::Resolver     Wed May 19 2021 14:15:15 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS CreateCompanyResolver                                                                       AWS::AppSync::Resolver     Wed May 19 2021 14:15:15 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS GetCompanyResolver                                                                          AWS::AppSync::Resolver     Wed May 19 2021 14:15:15 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS ListCompanyResolver                                                                         AWS::AppSync::Resolver     Wed May 19 2021 14:15:15 GMT+0200 (Central European Summer Time)
⠼ Updating resources in the cloud. This may take a few minutes...

DELETE_COMPLETE GetCompanyResolver AWS::AppSync::Resolver Wed May 19 2021 14:15:16 GMT+0200 (Central European Summer Time)
⠧ Updating resources in the cloud. This may take a few minutes...

DELETE_COMPLETE    UpdateTicketResolver AWS::AppSync::Resolver   Wed May 19 2021 14:15:17 GMT+0200 (Central European Summer Time)
DELETE_COMPLETE    CreateTicketResolver AWS::AppSync::Resolver   Wed May 19 2021 14:15:17 GMT+0200 (Central European Summer Time)
DELETE_COMPLETE    DeleteTicketResolver AWS::AppSync::Resolver   Wed May 19 2021 14:15:17 GMT+0200 (Central European Summer Time)
DELETE_COMPLETE    ListTicketResolver   AWS::AppSync::Resolver   Wed May 19 2021 14:15:17 GMT+0200 (Central European Summer Time)
DELETE_COMPLETE    GetTicketResolver    AWS::AppSync::Resolver   Wed May 19 2021 14:15:19 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS TicketDataSource     AWS::AppSync::DataSource Wed May 19 2021 14:15:20 GMT+0200 (Central European Summer Time)
DELETE_COMPLETE    TicketDataSource     AWS::AppSync::DataSource Wed May 19 2021 14:15:21 GMT+0200 (Central European Summer Time)
⠇ Updating resources in the cloud. This may take a few minutes...

DELETE_COMPLETE ListCompanyResolver   AWS::AppSync::Resolver Wed May 19 2021 14:15:17 GMT+0200 (Central European Summer Time)
DELETE_COMPLETE UpdateCompanyResolver AWS::AppSync::Resolver Wed May 19 2021 14:15:18 GMT+0200 (Central European Summer Time)
DELETE_COMPLETE DeleteCompanyResolver AWS::AppSync::Resolver Wed May 19 2021 14:15:18 GMT+0200 (Central European Summer Time)
⠋ Updating resources in the cloud. This may take a few minutes...

DELETE_COMPLETE    CreateCompanyResolver AWS::AppSync::Resolver   Wed May 19 2021 14:15:22 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS CompanyDataSource     AWS::AppSync::DataSource Wed May 19 2021 14:15:23 GMT+0200 (Central European Summer Time)
DELETE_COMPLETE    CompanyDataSource     AWS::AppSync::DataSource Wed May 19 2021 14:15:25 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS CompanyIAMRole        AWS::IAM::Role           Wed May 19 2021 14:15:25 GMT+0200 (Central European Summer Time)
⠙ Updating resources in the cloud. This may take a few minutes...

DELETE_IN_PROGRESS TicketIAMRole AWS::IAM::Role Wed May 19 2021 14:15:22 GMT+0200 (Central European Summer Time)
DELETE_COMPLETE    TicketIAMRole AWS::IAM::Role Wed May 19 2021 14:15:24 GMT+0200 (Central European Summer Time)
⠋ Updating resources in the cloud. This may take a few minutes...

DELETE_COMPLETE CompanyIAMRole AWS::IAM::Role Wed May 19 2021 14:15:28 GMT+0200 (Central European Summer Time)
⠴ Updating resources in the cloud. This may take a few minutes...

DELETE_COMPLETE TicketTable AWS::DynamoDB::Table Wed May 19 2021 14:15:47 GMT+0200 (Central European Summer Time)
⠋ Updating resources in the cloud. This may take a few minutes...

DELETE_COMPLETE amplify-theticket2invoice-dev-135843-apitheticket2invoice-1FIG5GYC3Z4J-Ticket-QWFH6R2ORFOA AWS::CloudFormation::Stack Wed May 19 2021 14:15:47 GMT+0200 (Central European Summer Time)
⠦ Updating resources in the cloud. This may take a few minutes...

DELETE_COMPLETE Ticket AWS::CloudFormation::Stack Wed May 19 2021 14:15:59 GMT+0200 (Central European Summer Time)
⠦ Updating resources in the cloud. This may take a few minutes...

DELETE_COMPLETE CompanyTable AWS::DynamoDB::Table Wed May 19 2021 14:16:16 GMT+0200 (Central European Summer Time)
⠹ Updating resources in the cloud. This may take a few minutes...

DELETE_COMPLETE amplify-theticket2invoice-dev-135843-apitheticket2invoice-1FIG5GYC3Z4J-Company-T6Z0FA5R5ETQ AWS::CloudFormation::Stack Wed May 19 2021 14:16:17 GMT+0200 (Central European Summer Time)
⠙ Updating resources in the cloud. This may take a few minutes...

DELETE_COMPLETE    Company        AWS::CloudFormation::Stack  Wed May 19 2021 14:16:30 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS NoneDataSource AWS::AppSync::DataSource    Wed May 19 2021 14:16:30 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS GraphQLSchema  AWS::AppSync::GraphQLSchema Wed May 19 2021 14:16:30 GMT+0200 (Central European Summer Time)
⠹ Updating resources in the cloud. This may take a few minutes...

DELETE_COMPLETE    NoneDataSource                                                         AWS::AppSync::DataSource    Wed May 19 2021 14:16:32 GMT+0200 (Central European Summer Time)
DELETE_COMPLETE    GraphQLSchema                                                          AWS::AppSync::GraphQLSchema Wed May 19 2021 14:16:32 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS GraphQLAPI                                                             AWS::AppSync::GraphQLApi    Wed May 19 2021 14:16:33 GMT+0200 (Central European Summer Time)
DELETE_COMPLETE    GraphQLAPI                                                             AWS::AppSync::GraphQLApi    Wed May 19 2021 14:16:35 GMT+0200 (Central European Summer Time)
DELETE_COMPLETE    amplify-theticket2invoice-dev-135843-apitheticket2invoice-1FIG5GYC3Z4J AWS::CloudFormation::Stack  Wed May 19 2021 14:16:35 GMT+0200 (Central European Summer Time)
⠇ Updating resources in the cloud. This may take a few minutes...

DELETE_COMPLETE    apitheticket2invoice          AWS::CloudFormation::Stack Wed May 19 2021 14:16:51 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS auththeticket2invoice4c18b3b3 AWS::CloudFormation::Stack Wed May 19 2021 14:16:52 GMT+0200 (Central European Summer Time)
⠸ Updating resources in the cloud. This may take a few minutes...

DELETE_IN_PROGRESS amplify-theticket2invoice-dev-135843-auththeticket2invoice4c18b3b3-1OGUYVDWP2BDG AWS::CloudFormation::Stack               Wed May 19 2021 14:16:52 GMT+0200 (Central European Summer Time) User Initiated
DELETE_IN_PROGRESS IdentityPoolRoleMap                                                              AWS::Cognito::IdentityPoolRoleAttachment Wed May 19 2021 14:16:55 GMT+0200 (Central European Summer Time)
⠋ Updating resources in the cloud. This may take a few minutes...

DELETE_COMPLETE IdentityPoolRoleMap AWS::Cognito::IdentityPoolRoleAttachment Wed May 19 2021 14:16:56 GMT+0200 (Central European Summer Time)
⠼ Updating resources in the cloud. This may take a few minutes...

DELETE_IN_PROGRESS IdentityPool         AWS::Cognito::IdentityPool   Wed May 19 2021 14:16:57 GMT+0200 (Central European Summer Time)
DELETE_COMPLETE    IdentityPool         AWS::Cognito::IdentityPool   Wed May 19 2021 14:16:59 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS UserPoolClientWeb    AWS::Cognito::UserPoolClient Wed May 19 2021 14:16:59 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS UserPoolClientInputs Custom::LambdaCallout        Wed May 19 2021 14:17:00 GMT+0200 (Central European Summer Time)
DELETE_COMPLETE    UserPoolClientWeb    AWS::Cognito::UserPoolClient Wed May 19 2021 14:17:01 GMT+0200 (Central European Summer Time)
⠼ Updating resources in the cloud. This may take a few minutes...

DELETE_COMPLETE    UserPoolClientInputs       Custom::LambdaCallout Wed May 19 2021 14:17:02 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS UserPoolClientLogPolicy    AWS::IAM::Policy      Wed May 19 2021 14:17:03 GMT+0200 (Central European Summer Time)
DELETE_COMPLETE    UserPoolClientLogPolicy    AWS::IAM::Policy      Wed May 19 2021 14:17:04 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS UserPoolClientLambdaPolicy AWS::IAM::Policy      Wed May 19 2021 14:17:05 GMT+0200 (Central European Summer Time)
DELETE_COMPLETE    UserPoolClientLambdaPolicy AWS::IAM::Policy      Wed May 19 2021 14:17:05 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS UserPoolClientLambda       AWS::Lambda::Function Wed May 19 2021 14:17:06 GMT+0200 (Central European Summer Time)
⠹ Updating resources in the cloud. This may take a few minutes...

DELETE_COMPLETE UserPoolClientLambda AWS::Lambda::Function Wed May 19 2021 14:17:17 GMT+0200 (Central European Summer Time)
⠴ Updating resources in the cloud. This may take a few minutes...

DELETE_IN_PROGRESS UserPoolClientRole AWS::IAM::Role               Wed May 19 2021 14:17:17 GMT+0200 (Central European Summer Time)
DELETE_COMPLETE    UserPoolClientRole AWS::IAM::Role               Wed May 19 2021 14:17:19 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS UserPoolClient     AWS::Cognito::UserPoolClient Wed May 19 2021 14:17:20 GMT+0200 (Central European Summer Time)
DELETE_COMPLETE    UserPoolClient     AWS::Cognito::UserPoolClient Wed May 19 2021 14:17:21 GMT+0200 (Central European Summer Time)
⠸ Updating resources in the cloud. This may take a few minutes...

DELETE_IN_PROGRESS UserPool AWS::Cognito::UserPool Wed May 19 2021 14:17:22 GMT+0200 (Central European Summer Time)
⠧ Updating resources in the cloud. This may take a few minutes...

DELETE_COMPLETE    UserPool AWS::Cognito::UserPool Wed May 19 2021 14:17:23 GMT+0200 (Central European Summer Time)
DELETE_IN_PROGRESS SNSRole  AWS::IAM::Role         Wed May 19 2021 14:17:24 GMT+0200 (Central European Summer Time)
⠴ Updating resources in the cloud. This may take a few minutes...

DELETE_COMPLETE SNSRole AWS::IAM::Role Wed May 19 2021 14:17:26 GMT+0200 (Central European Summer Time)
⠦ Updating resources in the cloud. This may take a few minutes...

DELETE_COMPLETE amplify-theticket2invoice-dev-135843-auththeticket2invoice4c18b3b3-1OGUYVDWP2BDG AWS::CloudFormation::Stack Wed May 19 2021 14:17:27 GMT+0200 (Central European Summer Time)
⠙ Updating resources in the cloud. This may take a few minutes...

DELETE_COMPLETE          auththeticket2invoice4c18b3b3        AWS::CloudFormation::Stack Wed May 19 2021 14:17:40 GMT+0200 (Central European Summer Time)
UPDATE_ROLLBACK_COMPLETE amplify-theticket2invoice-dev-135843 AWS::CloudFormation::Stack Wed May 19 2021 14:17:40 GMT+0200 (Central European Summer Time)
⠏ Updating resources in the cloud. This may take a few minutes...Error updating cloudformation stack
⠏ Updating resources in the cloud. This may take a few minutes...

Following resources failed

✖ An error occurred when pushing the resources to the cloud

Resource is not in the state stackUpdateComplete
An error occurred during the push operation: Resource is not in the state stackUpdateComplete

```
