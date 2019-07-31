
# CircleCI

## Deploying

Deploy by signing into [circleci.com](http://circleci.com/) with github. Add and set up your project.

You can add your github token by clicking on a projects `settings` icon and going to `Environment Variables` and adding:

### `GH_TOKEN`
`
[create a personal access token for a public github here](https://github.com/settings/tokens/new?scopes=public_repo).

When creating the token, the minimum required scopes are:

- repo for a private repository
- public_repo for a public repository

## HOLD

Once set up properly it will be building a `workflow` that puts your `release` job `ON HOLD` until manually approved. This lets you batch up fixes and features into 1 release and still have the convenience of a 1 button deploy.

## Github Releases
On successfull release, it will create release notes and a new release and publish to github and github pages.

## Github Pages

You can view your deployed react site at the `homepage` url required to be changed in the `package.json` mentioned in the [README.md](README.md)


## Elastic Beanstalk Auto Deploy

### Setup

#### New IAM User

- Click here to make a new user https://console.aws.amazon.com/iam/home#/users$new?step=details
- Set new username to `PristineUser`
- Select `Programmatic Access` as the typ
- Click Create Group on the permission page
- Set a group name and select `AWSElasticBeanstalkFullAccess` policy type
- Create Group
- Review and Create

###### Add Secrets to CircleCI

- Add deployment user environment variables to CircleCi
  - Project Settings > Environment Variables
    - add `AWS_ACCESS_KEY_ID`
    - add `AWS_SECRET_ACCESS_KEY`

##### Setup an Elastic Beanstalk application

- Click here to make a new elastic beanstalk application: https://console.aws.amazon.com/elasticbeanstalk/home
- `Create New Application`
- `Create New Environment`
- Select `web server`
- leave environment name defaulted to `MyApp-env`
