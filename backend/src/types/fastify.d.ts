// src/types/fastify.d.ts
import { OAuth2Namespace } from '@fastify/oauth2'
import { User } from '../modules/user/user.entity.js'
import { Exhibition } from '../modules/exhibition/exhibition.entity.js'
import { Exhibitor } from '../modules/exhibitor/exhibitor.entity.js'

declare module 'fastify' {
  interface FastifyInstance {
    forumOAuth2: OAuth2Namespace
  }

  interface FastifyRequest {
    user: User | undefined
    exhibitor: Exhibitor | undefined
    exhibition: Exhibition
  }
}

declare module '@fastify/jwt' {
  interface FastifyJWT {
    user: User | undefined // Define user type
  }
}

declare module '@fastify/session' {
  interface FastifySessionObject {
    userId?: number
    redirectUrl?: string
  }
}
