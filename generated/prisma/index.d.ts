// Code generated by Prisma (prisma@1.18.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from "graphql";
import { IResolvers } from "graphql-tools/dist/Interfaces";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  link: (where?: LinkWhereInput) => Promise<boolean>;
  post: (where?: PostWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;
  $getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;

  /**
   * Queries
   */

  link: (where: LinkWhereUniqueInput) => Link;
  links: (
    args?: {
      where?: LinkWhereInput;
      orderBy?: LinkOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<LinkNode>;
  linksConnection: (
    args?: {
      where?: LinkWhereInput;
      orderBy?: LinkOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => LinkConnection;
  post: (where: PostWhereUniqueInput) => Post;
  posts: (
    args?: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<PostNode>;
  postsConnection: (
    args?: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => PostConnection;
  user: (where: UserWhereUniqueInput) => User;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<UserNode>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnection;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createLink: (data: LinkCreateInput) => Link;
  updateLink: (
    args: { data: LinkUpdateInput; where: LinkWhereUniqueInput }
  ) => Link;
  updateManyLinks: (
    args: { data: LinkUpdateInput; where?: LinkWhereInput }
  ) => BatchPayload;
  upsertLink: (
    args: {
      where: LinkWhereUniqueInput;
      create: LinkCreateInput;
      update: LinkUpdateInput;
    }
  ) => Link;
  deleteLink: (where: LinkWhereUniqueInput) => Link;
  deleteManyLinks: (where?: LinkWhereInput) => BatchPayload;
  createPost: (data: PostCreateInput) => Post;
  updatePost: (
    args: { data: PostUpdateInput; where: PostWhereUniqueInput }
  ) => Post;
  updateManyPosts: (
    args: { data: PostUpdateInput; where?: PostWhereInput }
  ) => BatchPayload;
  upsertPost: (
    args: {
      where: PostWhereUniqueInput;
      create: PostCreateInput;
      update: PostUpdateInput;
    }
  ) => Post;
  deletePost: (where: PostWhereUniqueInput) => Post;
  deleteManyPosts: (where?: PostWhereInput) => BatchPayload;
  createUser: (data: UserCreateInput) => User;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => User;
  updateManyUsers: (
    args: { data: UserUpdateInput; where?: UserWhereInput }
  ) => BatchPayload;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => User;
  deleteUser: (where: UserWhereUniqueInput) => User;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayload;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  link: (
    where?: LinkSubscriptionWhereInput
  ) => LinkSubscriptionPayloadSubscription;
  post: (
    where?: PostSubscriptionWhereInput
  ) => PostSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type PostOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type LinkOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "url_ASC"
  | "url_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface PostUpdateOneRequiredWithoutLinksInput {
  create?: PostCreateWithoutLinksInput;
  update?: PostUpdateWithoutLinksDataInput;
  upsert?: PostUpsertWithoutLinksInput;
  connect?: PostWhereUniqueInput;
}

export type LinkWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface UserUpdateWithoutPostsDataInput {
  name?: String;
}

export interface PostWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  user?: UserWhereInput;
  links_every?: LinkWhereInput;
  links_some?: LinkWhereInput;
  links_none?: LinkWhereInput;
  AND?: PostWhereInput[] | PostWhereInput;
  OR?: PostWhereInput[] | PostWhereInput;
  NOT?: PostWhereInput[] | PostWhereInput;
}

export interface UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput;
  create: UserCreateWithoutPostsInput;
}

export interface LinkWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  url?: String;
  url_not?: String;
  url_in?: String[] | String;
  url_not_in?: String[] | String;
  url_lt?: String;
  url_lte?: String;
  url_gt?: String;
  url_gte?: String;
  url_contains?: String;
  url_not_contains?: String;
  url_starts_with?: String;
  url_not_starts_with?: String;
  url_ends_with?: String;
  url_not_ends_with?: String;
  post?: PostWhereInput;
  AND?: LinkWhereInput[] | LinkWhereInput;
  OR?: LinkWhereInput[] | LinkWhereInput;
  NOT?: LinkWhereInput[] | LinkWhereInput;
}

export interface LinkCreateInput {
  url: String;
  post: PostCreateOneWithoutLinksInput;
}

export interface LinkCreateManyWithoutPostInput {
  create?: LinkCreateWithoutPostInput[] | LinkCreateWithoutPostInput;
  connect?: LinkWhereUniqueInput[] | LinkWhereUniqueInput;
}

export interface PostCreateOneWithoutLinksInput {
  create?: PostCreateWithoutLinksInput;
  connect?: PostWhereUniqueInput;
}

export interface PostUpsertWithoutLinksInput {
  update: PostUpdateWithoutLinksDataInput;
  create: PostCreateWithoutLinksInput;
}

export interface PostCreateWithoutLinksInput {
  name: String;
  user: UserCreateOneWithoutPostsInput;
}

export interface PostSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: PostWhereInput;
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
  NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
}

export interface UserCreateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput;
  connect?: UserWhereUniqueInput;
}

export interface PostUpsertWithWhereUniqueWithoutUserInput {
  where: PostWhereUniqueInput;
  update: PostUpdateWithoutUserDataInput;
  create: PostCreateWithoutUserInput;
}

export interface UserCreateWithoutPostsInput {
  name: String;
}

export type PostWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface LinkUpdateInput {
  url?: String;
  post?: PostUpdateOneRequiredWithoutLinksInput;
}

export interface PostUpdateManyWithoutUserInput {
  create?: PostCreateWithoutUserInput[] | PostCreateWithoutUserInput;
  delete?: PostWhereUniqueInput[] | PostWhereUniqueInput;
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput;
  disconnect?: PostWhereUniqueInput[] | PostWhereUniqueInput;
  update?:
    | PostUpdateWithWhereUniqueWithoutUserInput[]
    | PostUpdateWithWhereUniqueWithoutUserInput;
  upsert?:
    | PostUpsertWithWhereUniqueWithoutUserInput[]
    | PostUpsertWithWhereUniqueWithoutUserInput;
}

export interface LinkUpdateWithoutPostDataInput {
  url?: String;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface PostUpdateWithoutLinksDataInput {
  name?: String;
  user?: UserUpdateOneRequiredWithoutPostsInput;
}

export interface PostCreateManyWithoutUserInput {
  create?: PostCreateWithoutUserInput[] | PostCreateWithoutUserInput;
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput;
}

export interface UserUpdateOneRequiredWithoutPostsInput {
  create?: UserCreateWithoutPostsInput;
  update?: UserUpdateWithoutPostsDataInput;
  upsert?: UserUpsertWithoutPostsInput;
  connect?: UserWhereUniqueInput;
}

export interface LinkUpsertWithWhereUniqueWithoutPostInput {
  where: LinkWhereUniqueInput;
  update: LinkUpdateWithoutPostDataInput;
  create: LinkCreateWithoutPostInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  posts_every?: PostWhereInput;
  posts_some?: PostWhereInput;
  posts_none?: PostWhereInput;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface LinkUpdateWithWhereUniqueWithoutPostInput {
  where: LinkWhereUniqueInput;
  data: LinkUpdateWithoutPostDataInput;
}

export interface PostUpdateWithoutUserDataInput {
  name?: String;
  links?: LinkUpdateManyWithoutPostInput;
}

export interface UserUpdateInput {
  name?: String;
  posts?: PostUpdateManyWithoutUserInput;
}

export interface PostCreateInput {
  name: String;
  user: UserCreateOneWithoutPostsInput;
  links?: LinkCreateManyWithoutPostInput;
}

export interface LinkCreateWithoutPostInput {
  url: String;
}

export interface PostUpdateInput {
  name?: String;
  user?: UserUpdateOneRequiredWithoutPostsInput;
  links?: LinkUpdateManyWithoutPostInput;
}

export interface LinkUpdateManyWithoutPostInput {
  create?: LinkCreateWithoutPostInput[] | LinkCreateWithoutPostInput;
  delete?: LinkWhereUniqueInput[] | LinkWhereUniqueInput;
  connect?: LinkWhereUniqueInput[] | LinkWhereUniqueInput;
  disconnect?: LinkWhereUniqueInput[] | LinkWhereUniqueInput;
  update?:
    | LinkUpdateWithWhereUniqueWithoutPostInput[]
    | LinkUpdateWithWhereUniqueWithoutPostInput;
  upsert?:
    | LinkUpsertWithWhereUniqueWithoutPostInput[]
    | LinkUpsertWithWhereUniqueWithoutPostInput;
}

export interface PostCreateWithoutUserInput {
  name: String;
  links?: LinkCreateManyWithoutPostInput;
}

export interface PostUpdateWithWhereUniqueWithoutUserInput {
  where: PostWhereUniqueInput;
  data: PostUpdateWithoutUserDataInput;
}

export interface LinkSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: LinkWhereInput;
  AND?: LinkSubscriptionWhereInput[] | LinkSubscriptionWhereInput;
  OR?: LinkSubscriptionWhereInput[] | LinkSubscriptionWhereInput;
  NOT?: LinkSubscriptionWhereInput[] | LinkSubscriptionWhereInput;
}

export interface UserCreateInput {
  name: String;
  posts?: PostCreateManyWithoutUserInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValuesNode {
  id: ID_Output;
  name: String;
}

export interface UserPreviousValues
  extends Promise<UserPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface PostEdgeNode {
  cursor: String;
}

export interface PostEdge extends Promise<PostEdgeNode>, Fragmentable {
  node: <T = Post>() => T;
  cursor: () => Promise<String>;
}

export interface PostEdgeSubscription
  extends Promise<AsyncIterator<PostEdgeNode>>,
    Fragmentable {
  node: <T = PostSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PostSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface PostSubscriptionPayload
  extends Promise<PostSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Post>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PostPreviousValues>() => T;
}

export interface PostSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PostSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PostSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PostPreviousValuesSubscription>() => T;
}

export interface PostConnectionNode {}

export interface PostConnection
  extends Promise<PostConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<PostEdgeNode>>() => T;
  aggregate: <T = AggregatePost>() => T;
}

export interface PostConnectionSubscription
  extends Promise<AsyncIterator<PostConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PostEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePostSubscription>() => T;
}

export interface AggregateLinkNode {
  count: Int;
}

export interface AggregateLink
  extends Promise<AggregateLinkNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateLinkSubscription
  extends Promise<AsyncIterator<AggregateLinkNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayloadNode {
  count: Long;
}

export interface BatchPayload extends Promise<BatchPayloadNode>, Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayloadNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserNode {
  id: ID_Output;
  name: String;
}

export interface User extends Promise<UserNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  posts: <T = FragmentableArray<PostNode>>(
    args?: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<UserNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  posts: <T = Promise<AsyncIterator<PostSubscription>>>(
    args?: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface LinkEdgeNode {
  cursor: String;
}

export interface LinkEdge extends Promise<LinkEdgeNode>, Fragmentable {
  node: <T = Link>() => T;
  cursor: () => Promise<String>;
}

export interface LinkEdgeSubscription
  extends Promise<AsyncIterator<LinkEdgeNode>>,
    Fragmentable {
  node: <T = LinkSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUserNode {
  count: Int;
}

export interface AggregateUser
  extends Promise<AggregateUserNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUserNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PostPreviousValuesNode {
  id: ID_Output;
  name: String;
}

export interface PostPreviousValues
  extends Promise<PostPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface PostPreviousValuesSubscription
  extends Promise<AsyncIterator<PostPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface UserConnectionNode {}

export interface UserConnection
  extends Promise<UserConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<UserEdgeNode>>() => T;
  aggregate: <T = AggregateUser>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface AggregatePostNode {
  count: Int;
}

export interface AggregatePost
  extends Promise<AggregatePostNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePostSubscription
  extends Promise<AsyncIterator<AggregatePostNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PageInfoNode {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfo extends Promise<PageInfoNode>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfoNode>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface LinkPreviousValuesNode {
  id: ID_Output;
  url: String;
}

export interface LinkPreviousValues
  extends Promise<LinkPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  url: () => Promise<String>;
}

export interface LinkPreviousValuesSubscription
  extends Promise<AsyncIterator<LinkPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  url: () => Promise<AsyncIterator<String>>;
}

export interface LinkSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface LinkSubscriptionPayload
  extends Promise<LinkSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Link>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = LinkPreviousValues>() => T;
}

export interface LinkSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<LinkSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = LinkSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = LinkPreviousValuesSubscription>() => T;
}

export interface LinkNode {
  id: ID_Output;
  url: String;
}

export interface Link extends Promise<LinkNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  url: () => Promise<String>;
  post: <T = Post>() => T;
}

export interface LinkSubscription
  extends Promise<AsyncIterator<LinkNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  url: () => Promise<AsyncIterator<String>>;
  post: <T = PostSubscription>() => T;
}

export interface PostNode {
  id: ID_Output;
  name: String;
}

export interface Post extends Promise<PostNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  user: <T = User>() => T;
  links: <T = FragmentableArray<LinkNode>>(
    args?: {
      where?: LinkWhereInput;
      orderBy?: LinkOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface PostSubscription
  extends Promise<AsyncIterator<PostNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  user: <T = UserSubscription>() => T;
  links: <T = Promise<AsyncIterator<LinkSubscription>>>(
    args?: {
      where?: LinkWhereInput;
      orderBy?: LinkOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface LinkConnectionNode {}

export interface LinkConnection
  extends Promise<LinkConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<LinkEdgeNode>>() => T;
  aggregate: <T = AggregateLink>() => T;
}

export interface LinkConnectionSubscription
  extends Promise<AsyncIterator<LinkConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<LinkEdgeSubscription>>>() => T;
  aggregate: <T = AggregateLinkSubscription>() => T;
}

export interface UserEdgeNode {
  cursor: String;
}

export interface UserEdge extends Promise<UserEdgeNode>, Fragmentable {
  node: <T = User>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdgeNode>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface UserSubscriptionPayload
  extends Promise<UserSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = User>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValues>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Type Defs
 */

export const prisma: Prisma;