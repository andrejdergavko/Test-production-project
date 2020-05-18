/* @flow */

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number
};

export type Campaign = {
  __typename?: "Campaign",
  id: $ElementType<Scalars, "ID">,
  name: $ElementType<Scalars, "String">,
  createdAt: $ElementType<Scalars, "String">,
  author: $ElementType<Scalars, "String">,
  clicks: $ElementType<Scalars, "Int">,
  views: $ElementType<Scalars, "Int">,
  isActive: $ElementType<Scalars, "Boolean">,
  channels: Array<?Channel>
};

export type CampaignCreateResponse = {
  __typename?: "CampaignCreateResponse",
  campaigns: Array<?Campaign>
};

export type CampaignsFilter = {
  field: $ElementType<Scalars, "String">,
  values: Array<?$ElementType<Scalars, "String">>
};

export type Channel = {
  __typename?: "Channel",
  name: $ElementType<Scalars, "String">
};

export type Mutation = {
  __typename?: "Mutation",
  createCampaign: CampaignCreateResponse
};

export type MutationCreateCampaignArgs = {
  name: $ElementType<Scalars, "String">
};

export type Query = {
  __typename?: "Query",
  campaigns: Array<?Campaign>,
  campaign?: ?Campaign,
  campaignByFilter: Array<?Campaign>
};

export type QueryCampaignArgs = {
  id: $ElementType<Scalars, "String">
};

export type QueryCampaignByFilterArgs = {
  filter?: ?Array<?CampaignsFilter>
};
type $Pick<Origin: Object, Keys: Object> = $ObjMapi<
  Keys,
  <Key>(k: Key) => $ElementType<Origin, Key>
>;

export type GetCampaingsByFilterQueryVariables = {
  filter?: ?Array<?CampaignsFilter>
};

export type GetCampaingsByFilterQuery = { __typename?: "Query" } & {
  campaignByFilter: Array<?({ __typename?: "Campaign" } & $Pick<
    Campaign,
    {
      id: *,
      name: *,
      createdAt: *,
      author: *,
      clicks: *,
      views: *,
      isActive: *
    }
  > & {
      channels: Array<?({ __typename?: "Channel" } & $Pick<
        Channel,
        { name: * }
      >)>
    })>
};
