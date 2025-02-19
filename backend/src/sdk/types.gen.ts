// This file is auto-generated by @hey-api/openapi-ts

export type PostUserSignUpData = {
  body: {
    fullName?: string
    bio?: string
    contacts?: {
      email?: string
      phone?: string
      website?: string
      mastodon?: string
    }
    password: string
  }
  path?: never
  query?: never
  url: '/user/sign-up'
}

export type PostUserSignUpErrors = {
  /**
   * The user account could not be created.
   */
  400: {
    error?: string
    [key: string]: unknown | string | undefined
  }
}

export type PostUserSignUpError =
  PostUserSignUpErrors[keyof PostUserSignUpErrors]

export type PostUserSignUpResponses = {
  /**
   * The user account was created
   */
  200: {
    id: number
    username: string
    fullName?: string
    bio?: string
    contacts?: {
      email?: string
      phone?: string
      website?: string
      mastodon?: string
    }
    isAdministrator: boolean
    tables?: Array<number>
    exhibits?: Array<{
      title?: string
      text?: string
      table?: number
    }>
  }
}

export type PostUserSignUpResponse =
  PostUserSignUpResponses[keyof PostUserSignUpResponses]

export type PostUserSignInData = {
  body: {
    username: string
    password: string
  }
  path?: never
  query?: never
  url: '/user/sign-in'
}

export type PostUserSignInErrors = {
  /**
   * Invalid input parameter(s).
   */
  400: {
    error?: string
    [key: string]: unknown | string | undefined
  }
  /**
   * Invalid username or password
   */
  401: {
    error?: string
    [key: string]: unknown | string | undefined
  }
}

export type PostUserSignInError =
  PostUserSignInErrors[keyof PostUserSignInErrors]

export type PostUserSignInResponses = {
  /**
   * The user was logged in
   */
  200: {
    id: number
    username: string
    fullName?: string
    bio?: string
    contacts?: {
      email?: string
      phone?: string
      website?: string
      mastodon?: string
    }
    isAdministrator: boolean
    tables?: Array<number>
    exhibits?: Array<{
      title?: string
      text?: string
      table?: number
    }>
    token?: string
  }
}

export type PostUserSignInResponse =
  PostUserSignInResponses[keyof PostUserSignInResponses]

export type GetUserProfileData = {
  body?: never
  path?: never
  query?: never
  url: '/user/profile'
}

export type GetUserProfileErrors = {
  /**
   * Not logged in.
   */
  401: {
    error?: string
    [key: string]: unknown | string | undefined
  }
}

export type GetUserProfileError =
  GetUserProfileErrors[keyof GetUserProfileErrors]

export type GetUserProfileResponses = {
  /**
   * The profile of the currently logged in user is returned
   */
  200: {
    id: number
    username: string
    fullName?: string
    bio?: string
    contacts?: {
      email?: string
      phone?: string
      website?: string
      mastodon?: string
    }
    isAdministrator: boolean
    tables?: Array<number>
    exhibits?: Array<{
      title?: string
      text?: string
      table?: number
    }>
  }
}

export type GetUserProfileResponse =
  GetUserProfileResponses[keyof GetUserProfileResponses]

export type PatchUserProfileData = {
  body?: {
    fullName?: string
    bio?: string
    contacts?: {
      email?: string
      phone?: string
      website?: string
      mastodon?: string
    }
    password?: string
  }
  path?: never
  query?: never
  url: '/user/profile'
}

export type PatchUserProfileErrors = {
  /**
   * The user account could not be created.
   */
  400: {
    error?: string
    [key: string]: unknown | string | undefined
  }
}

export type PatchUserProfileError =
  PatchUserProfileErrors[keyof PatchUserProfileErrors]

export type PatchUserProfileResponses = {
  /**
   * The user account was updated
   */
  200: {
    id: number
    username: string
    fullName?: string
    bio?: string
    contacts?: {
      email?: string
      phone?: string
      website?: string
      mastodon?: string
    }
    isAdministrator: boolean
    tables?: Array<number>
    exhibits?: Array<{
      title?: string
      text?: string
      table?: number
    }>
  }
}

export type PatchUserProfileResponse =
  PatchUserProfileResponses[keyof PatchUserProfileResponses]

export type GetUserByIdData = {
  body?: never
  path: {
    /**
     * Username or ID of the user to look up
     */
    id: string
  }
  query?: never
  url: '/user/{id}'
}

export type GetUserByIdErrors = {
  /**
   * No user was found matching the given ID
   */
  404: {
    error?: string
    [key: string]: unknown | string | undefined
  }
}

export type GetUserByIdError = GetUserByIdErrors[keyof GetUserByIdErrors]

export type GetUserByIdResponses = {
  /**
   * The profile of the user is returned
   */
  200: {
    id: number
    username: string
    fullName?: string
    bio?: string
    contacts?: {
      email?: string
      phone?: string
      website?: string
      mastodon?: string
    }
    isAdministrator: boolean
    tables?: Array<number>
    exhibits?: Array<{
      title?: string
      text?: string
      table?: number
    }>
  }
}

export type GetUserByIdResponse =
  GetUserByIdResponses[keyof GetUserByIdResponses]

export type GetExhibitData = {
  body?: never
  path?: never
  query?: never
  url: '/exhibit/'
}

export type GetExhibitResponses = {
  /**
   * One page of exhibits
   */
  200: {
    items?: Array<{
      /**
       * Unique id of the exhibit
       */
      id: number
      /**
       * Title
       */
      title: string
      /**
       * Description
       */
      description?: string
      /**
       * User ID of the exhibitor
       */
      exhibitorId: number
      /**
       * Name of the exhibitor
       */
      exhibitorName: string
      /**
       * Table number, if assigned to a specific table
       */
      table?: number | null
    }>
    total?: number
  }
}

export type GetExhibitResponse = GetExhibitResponses[keyof GetExhibitResponses]

export type PostExhibitData = {
  body: {
    title: string
    text?: string
    table?: number
  }
  path?: never
  query?: never
  url: '/exhibit/'
}

export type PostExhibitErrors = {
  /**
   * Not logged in
   */
  403: {
    error?: string
    [key: string]: unknown | string | undefined
  }
}

export type PostExhibitError = PostExhibitErrors[keyof PostExhibitErrors]

export type PostExhibitResponses = {
  /**
   * The exhibit was created
   */
  200: {
    id: number
    title: string
    text?: string
    table?: number
    exhibitor: {
      fullName?: string
      bio?: string
      contacts?: {
        email?: string
        phone?: string
        website?: string
        mastodon?: string
      }
    }
  }
}

export type PostExhibitResponse =
  PostExhibitResponses[keyof PostExhibitResponses]

export type GetExhibitByIdData = {
  body?: never
  path: {
    id: number
  }
  query?: never
  url: '/exhibit/{id}'
}

export type GetExhibitByIdErrors = {
  /**
   * The exhibit does not exist
   */
  404: {
    error?: string
    [key: string]: unknown | string | undefined
  }
}

export type GetExhibitByIdError =
  GetExhibitByIdErrors[keyof GetExhibitByIdErrors]

export type GetExhibitByIdResponses = {
  /**
   * The exhibit was found
   */
  200: {
    id: number
    title: string
    text?: string
    table?: number
    exhibitor: {
      fullName?: string
      bio?: string
      contacts?: {
        email?: string
        phone?: string
        website?: string
        mastodon?: string
      }
    }
  }
}

export type GetExhibitByIdResponse =
  GetExhibitByIdResponses[keyof GetExhibitByIdResponses]

export type PatchExhibitByIdData = {
  body?: {
    title?: string
    text?: string
    table?: number
  }
  path: {
    id: number
  }
  query?: never
  url: '/exhibit/{id}'
}

export type PatchExhibitByIdErrors = {
  /**
   * The current user does not own this exhibit
   */
  403: {
    error?: string
    [key: string]: unknown | string | undefined
  }
}

export type PatchExhibitByIdError =
  PatchExhibitByIdErrors[keyof PatchExhibitByIdErrors]

export type PatchExhibitByIdResponses = {
  /**
   * The exhibit was updated
   */
  204: void
}

export type PatchExhibitByIdResponse =
  PatchExhibitByIdResponses[keyof PatchExhibitByIdResponses]

export type PostTableByNumberClaimData = {
  body?: never
  path: {
    /**
     * Number of the table to claim
     */
    number: number
  }
  query?: never
  url: '/table/{number}/claim'
}

export type PostTableByNumberClaimErrors = {
  /**
   * The table is already claimed by another user
   */
  403: {
    error?: string
    [key: string]: unknown | string | undefined
  }
}

export type PostTableByNumberClaimError =
  PostTableByNumberClaimErrors[keyof PostTableByNumberClaimErrors]

export type PostTableByNumberClaimResponses = {
  /**
   * The table was claimed
   */
  204: void
}

export type PostTableByNumberClaimResponse =
  PostTableByNumberClaimResponses[keyof PostTableByNumberClaimResponses]

export type PostTableByNumberReleaseData = {
  body?: never
  path: {
    /**
     * Number of the table to release
     */
    number: number
  }
  query?: never
  url: '/table/{number}/release'
}

export type PostTableByNumberReleaseErrors = {
  /**
   * The table is not claimed by the current user
   */
  403: {
    error?: string
    [key: string]: unknown | string | undefined
  }
}

export type PostTableByNumberReleaseError =
  PostTableByNumberReleaseErrors[keyof PostTableByNumberReleaseErrors]

export type PostTableByNumberReleaseResponses = {
  /**
   * The table was released
   */
  204: void
}

export type PostTableByNumberReleaseResponse =
  PostTableByNumberReleaseResponses[keyof PostTableByNumberReleaseResponses]

export type PostTableByNumberAssignToByUserIdData = {
  body?: never
  path: {
    /**
     * Number of the table to assign
     */
    number: number
    /**
     * Username or id of the user
     */
    userId: string
  }
  query?: never
  url: '/table/{number}/assign-to/{userId}'
}

export type PostTableByNumberAssignToByUserIdErrors = {
  /**
   * Current user does not have administrative rights
   */
  403: {
    error?: string
    [key: string]: unknown | string | undefined
  }
}

export type PostTableByNumberAssignToByUserIdError =
  PostTableByNumberAssignToByUserIdErrors[keyof PostTableByNumberAssignToByUserIdErrors]

export type PostTableByNumberAssignToByUserIdResponses = {
  /**
   * The table was claimed
   */
  204: void
}

export type PostTableByNumberAssignToByUserIdResponse =
  PostTableByNumberAssignToByUserIdResponses[keyof PostTableByNumberAssignToByUserIdResponses]

export type ClientOptions = {
  baseURL: `${string}://${string}/api` | 'http://localhost:3001' | (string & {})
}
