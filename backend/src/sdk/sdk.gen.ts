// This file is auto-generated by @hey-api/openapi-ts

import type {
  Options as ClientOptions,
  TDataShape,
  Client,
} from '@hey-api/client-axios'
import type {
  PostAuthLogoutData,
  PostAuthLogoutResponse,
  PostUserLoginData,
  PostUserLoginResponse,
  PostUserLoginError,
  GetUserProfileData,
  GetUserProfileResponse,
  GetUserProfileError,
  PatchUserProfileData,
  PatchUserProfileResponse,
  PatchUserProfileError,
  GetUserData,
  GetUserResponse,
  GetUserByIdData,
  GetUserByIdResponse,
  GetUserByIdError,
  GetExhibitData,
  GetExhibitResponse,
  PostExhibitData,
  PostExhibitResponse,
  PostExhibitError,
  GetExhibitByIdData,
  GetExhibitByIdResponse,
  GetExhibitByIdError,
  PatchExhibitByIdData,
  PatchExhibitByIdResponse,
  PatchExhibitByIdError,
  GetTableByNumberData,
  GetTableByNumberResponse,
  GetTableByNumberError,
  PostTableByNumberClaimData,
  PostTableByNumberClaimResponse,
  PostTableByNumberClaimError,
  PostTableByNumberReleaseData,
  PostTableByNumberReleaseResponse,
  PostTableByNumberReleaseError,
  PostTableByNumberAssignToByUserIdData,
  PostTableByNumberAssignToByUserIdResponse,
  PostTableByNumberAssignToByUserIdError,
  GetRegistrationByEventIdData,
  GetRegistrationByEventIdResponse,
  GetRegistrationByEventIdError,
  PostRegistrationByEventIdData,
  PostRegistrationByEventIdResponse,
  PostRegistrationByEventIdError,
  GetRegistrationByEventIdByRegistrationIdData,
  GetRegistrationByEventIdByRegistrationIdResponse,
  GetRegistrationByEventIdByRegistrationIdError,
  PatchRegistrationByEventIdByRegistrationIdData,
  PatchRegistrationByEventIdByRegistrationIdResponse,
  PatchRegistrationByEventIdByRegistrationIdError,
} from './types.gen'
import { client as _heyApiClient } from './client.gen'

export type Options<
  TData extends TDataShape = TDataShape,
  ThrowOnError extends boolean = boolean,
> = ClientOptions<TData, ThrowOnError> & {
  /**
   * You can provide a client instance returned by `createClient()` instead of
   * individual options. This might be also useful if you want to implement a
   * custom client.
   */
  client?: Client
  /**
   * You can pass arbitrary values through the `meta` object. This can be
   * used to access values that aren't defined as part of the SDK function.
   */
  meta?: Record<string, unknown>
}

/**
 * Log out the current user and destroy the session
 */
export const postAuthLogout = <ThrowOnError extends boolean = false>(
  options?: Options<PostAuthLogoutData, ThrowOnError>,
) => {
  return (options?.client ?? _heyApiClient).post<
    PostAuthLogoutResponse,
    unknown,
    ThrowOnError
  >({
    url: '/auth/logout',
    ...options,
  })
}

/**
 * Log in
 */
export const postUserLogin = <ThrowOnError extends boolean = false>(
  options: Options<PostUserLoginData, ThrowOnError>,
) => {
  return (options.client ?? _heyApiClient).post<
    PostUserLoginResponse,
    PostUserLoginError,
    ThrowOnError
  >({
    url: '/user/login',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  })
}

/**
 * Retrieve the profile of the currently logged in user
 */
export const getUserProfile = <ThrowOnError extends boolean = false>(
  options?: Options<GetUserProfileData, ThrowOnError>,
) => {
  return (options?.client ?? _heyApiClient).get<
    GetUserProfileResponse,
    GetUserProfileError,
    ThrowOnError
  >({
    url: '/user/profile',
    ...options,
  })
}

/**
 * Update user account
 */
export const patchUserProfile = <ThrowOnError extends boolean = false>(
  options?: Options<PatchUserProfileData, ThrowOnError>,
) => {
  return (options?.client ?? _heyApiClient).patch<
    PatchUserProfileResponse,
    PatchUserProfileError,
    ThrowOnError
  >({
    url: '/user/profile',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  })
}

/**
 * Retrieve the full user list
 */
export const getUser = <ThrowOnError extends boolean = false>(
  options?: Options<GetUserData, ThrowOnError>,
) => {
  return (options?.client ?? _heyApiClient).get<
    GetUserResponse,
    unknown,
    ThrowOnError
  >({
    url: '/user/',
    ...options,
  })
}

/**
 * Retrieve the profile of the user identified by ID
 */
export const getUserById = <ThrowOnError extends boolean = false>(
  options: Options<GetUserByIdData, ThrowOnError>,
) => {
  return (options.client ?? _heyApiClient).get<
    GetUserByIdResponse,
    GetUserByIdError,
    ThrowOnError
  >({
    url: '/user/{id}',
    ...options,
  })
}

/**
 * Retrieve list of all exhibits
 */
export const getExhibit = <ThrowOnError extends boolean = false>(
  options?: Options<GetExhibitData, ThrowOnError>,
) => {
  return (options?.client ?? _heyApiClient).get<
    GetExhibitResponse,
    unknown,
    ThrowOnError
  >({
    url: '/exhibit/',
    ...options,
  })
}

/**
 * Create exhibit
 */
export const postExhibit = <ThrowOnError extends boolean = false>(
  options: Options<PostExhibitData, ThrowOnError>,
) => {
  return (options.client ?? _heyApiClient).post<
    PostExhibitResponse,
    PostExhibitError,
    ThrowOnError
  >({
    url: '/exhibit/',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  })
}

/**
 * Retrieve a single exhibit
 */
export const getExhibitById = <ThrowOnError extends boolean = false>(
  options: Options<GetExhibitByIdData, ThrowOnError>,
) => {
  return (options.client ?? _heyApiClient).get<
    GetExhibitByIdResponse,
    GetExhibitByIdError,
    ThrowOnError
  >({
    url: '/exhibit/{id}',
    ...options,
  })
}

/**
 * Update the properties of an exhibit
 */
export const patchExhibitById = <ThrowOnError extends boolean = false>(
  options: Options<PatchExhibitByIdData, ThrowOnError>,
) => {
  return (options.client ?? _heyApiClient).patch<
    PatchExhibitByIdResponse,
    PatchExhibitByIdError,
    ThrowOnError
  >({
    url: '/exhibit/{id}',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  })
}

/**
 * Retrieve the status of a table
 */
export const getTableByNumber = <ThrowOnError extends boolean = false>(
  options: Options<GetTableByNumberData, ThrowOnError>,
) => {
  return (options.client ?? _heyApiClient).get<
    GetTableByNumberResponse,
    GetTableByNumberError,
    ThrowOnError
  >({
    url: '/table/{number}',
    ...options,
  })
}

/**
 * Claim a table to associate it with the current user
 */
export const postTableByNumberClaim = <ThrowOnError extends boolean = false>(
  options: Options<PostTableByNumberClaimData, ThrowOnError>,
) => {
  return (options.client ?? _heyApiClient).post<
    PostTableByNumberClaimResponse,
    PostTableByNumberClaimError,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/table/{number}/claim',
    ...options,
  })
}

/**
 * Release a table so that it can be claimed by another user
 */
export const postTableByNumberRelease = <ThrowOnError extends boolean = false>(
  options: Options<PostTableByNumberReleaseData, ThrowOnError>,
) => {
  return (options.client ?? _heyApiClient).post<
    PostTableByNumberReleaseResponse,
    PostTableByNumberReleaseError,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/table/{number}/release',
    ...options,
  })
}

/**
 * Assign a table to a user
 */
export const postTableByNumberAssignToByUserId = <
  ThrowOnError extends boolean = false,
>(
  options: Options<PostTableByNumberAssignToByUserIdData, ThrowOnError>,
) => {
  return (options.client ?? _heyApiClient).post<
    PostTableByNumberAssignToByUserIdResponse,
    PostTableByNumberAssignToByUserIdError,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/table/{number}/assign-to/{userId}',
    ...options,
  })
}

/**
 * Retrieve all registrations
 */
export const getRegistrationByEventId = <ThrowOnError extends boolean = false>(
  options: Options<GetRegistrationByEventIdData, ThrowOnError>,
) => {
  return (options.client ?? _heyApiClient).get<
    GetRegistrationByEventIdResponse,
    GetRegistrationByEventIdError,
    ThrowOnError
  >({
    url: '/registration/{eventId}',
    ...options,
  })
}

/**
 * Create a registration
 */
export const postRegistrationByEventId = <ThrowOnError extends boolean = false>(
  options: Options<PostRegistrationByEventIdData, ThrowOnError>,
) => {
  return (options.client ?? _heyApiClient).post<
    PostRegistrationByEventIdResponse,
    PostRegistrationByEventIdError,
    ThrowOnError
  >({
    url: '/registration/{eventId}',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  })
}

/**
 * Update a registration
 */
export const getRegistrationByEventIdByRegistrationId = <
  ThrowOnError extends boolean = false,
>(
  options: Options<GetRegistrationByEventIdByRegistrationIdData, ThrowOnError>,
) => {
  return (options.client ?? _heyApiClient).get<
    GetRegistrationByEventIdByRegistrationIdResponse,
    GetRegistrationByEventIdByRegistrationIdError,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/registration/{eventId}/{registrationId}',
    ...options,
  })
}

/**
 * Update a registration
 */
export const patchRegistrationByEventIdByRegistrationId = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    PatchRegistrationByEventIdByRegistrationIdData,
    ThrowOnError
  >,
) => {
  return (options.client ?? _heyApiClient).patch<
    PatchRegistrationByEventIdByRegistrationIdResponse,
    PatchRegistrationByEventIdByRegistrationIdError,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/registration/{eventId}/{registrationId}',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  })
}
