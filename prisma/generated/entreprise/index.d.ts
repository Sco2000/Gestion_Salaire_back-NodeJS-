
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Employes
 * 
 */
export type Employes = $Result.DefaultSelection<Prisma.$EmployesPayload>
/**
 * Model BulletinsSalaire
 * 
 */
export type BulletinsSalaire = $Result.DefaultSelection<Prisma.$BulletinsSalairePayload>
/**
 * Model PayRun
 * 
 */
export type PayRun = $Result.DefaultSelection<Prisma.$PayRunPayload>
/**
 * Model Contrat
 * 
 */
export type Contrat = $Result.DefaultSelection<Prisma.$ContratPayload>
/**
 * Model Pointages
 * 
 */
export type Pointages = $Result.DefaultSelection<Prisma.$PointagesPayload>
/**
 * Model Paiement
 * 
 */
export type Paiement = $Result.DefaultSelection<Prisma.$PaiementPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ModePaiement: {
  ESPECES: 'ESPECES',
  VIREMENT: 'VIREMENT',
  CHEQUE: 'CHEQUE'
};

export type ModePaiement = (typeof ModePaiement)[keyof typeof ModePaiement]


export const StatutPaiement: {
  EN_ATTENTE: 'EN_ATTENTE',
  PAYE: 'PAYE',
  ECHEC: 'ECHEC'
};

export type StatutPaiement = (typeof StatutPaiement)[keyof typeof StatutPaiement]


export const Statut: {
  ACTIF: 'ACTIF',
  INACTIF: 'INACTIF'
};

export type Statut = (typeof Statut)[keyof typeof Statut]


export const Role: {
  CAISSIER: 'CAISSIER',
  EMPLOYE: 'EMPLOYE'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TypeContrat: {
  CDI: 'CDI',
  CDD: 'CDD',
  JOURNALIER: 'JOURNALIER',
  HORAIRE: 'HORAIRE'
};

export type TypeContrat = (typeof TypeContrat)[keyof typeof TypeContrat]


export const PayRunStatut: {
  EN_COURS: 'EN_COURS',
  VALIDE: 'VALIDE',
  PAYE: 'PAYE'
};

export type PayRunStatut = (typeof PayRunStatut)[keyof typeof PayRunStatut]


export const TypePayRun: {
  MENSUEL: 'MENSUEL',
  HEBDOMADAIRE: 'HEBDOMADAIRE',
  JOURNALIER: 'JOURNALIER'
};

export type TypePayRun = (typeof TypePayRun)[keyof typeof TypePayRun]

}

export type ModePaiement = $Enums.ModePaiement

export const ModePaiement: typeof $Enums.ModePaiement

export type StatutPaiement = $Enums.StatutPaiement

export const StatutPaiement: typeof $Enums.StatutPaiement

export type Statut = $Enums.Statut

export const Statut: typeof $Enums.Statut

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TypeContrat = $Enums.TypeContrat

export const TypeContrat: typeof $Enums.TypeContrat

export type PayRunStatut = $Enums.PayRunStatut

export const PayRunStatut: typeof $Enums.PayRunStatut

export type TypePayRun = $Enums.TypePayRun

export const TypePayRun: typeof $Enums.TypePayRun

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Employes
 * const employes = await prisma.employes.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Employes
   * const employes = await prisma.employes.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.employes`: Exposes CRUD operations for the **Employes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employes
    * const employes = await prisma.employes.findMany()
    * ```
    */
  get employes(): Prisma.EmployesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bulletinsSalaire`: Exposes CRUD operations for the **BulletinsSalaire** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BulletinsSalaires
    * const bulletinsSalaires = await prisma.bulletinsSalaire.findMany()
    * ```
    */
  get bulletinsSalaire(): Prisma.BulletinsSalaireDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payRun`: Exposes CRUD operations for the **PayRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayRuns
    * const payRuns = await prisma.payRun.findMany()
    * ```
    */
  get payRun(): Prisma.PayRunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contrat`: Exposes CRUD operations for the **Contrat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contrats
    * const contrats = await prisma.contrat.findMany()
    * ```
    */
  get contrat(): Prisma.ContratDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pointages`: Exposes CRUD operations for the **Pointages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pointages
    * const pointages = await prisma.pointages.findMany()
    * ```
    */
  get pointages(): Prisma.PointagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paiement`: Exposes CRUD operations for the **Paiement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Paiements
    * const paiements = await prisma.paiement.findMany()
    * ```
    */
  get paiement(): Prisma.PaiementDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Employes: 'Employes',
    BulletinsSalaire: 'BulletinsSalaire',
    PayRun: 'PayRun',
    Contrat: 'Contrat',
    Pointages: 'Pointages',
    Paiement: 'Paiement'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "employes" | "bulletinsSalaire" | "payRun" | "contrat" | "pointages" | "paiement"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Employes: {
        payload: Prisma.$EmployesPayload<ExtArgs>
        fields: Prisma.EmployesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployesPayload>
          }
          findFirst: {
            args: Prisma.EmployesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployesPayload>
          }
          findMany: {
            args: Prisma.EmployesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployesPayload>[]
          }
          create: {
            args: Prisma.EmployesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployesPayload>
          }
          createMany: {
            args: Prisma.EmployesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmployesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployesPayload>
          }
          update: {
            args: Prisma.EmployesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployesPayload>
          }
          deleteMany: {
            args: Prisma.EmployesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmployesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployesPayload>
          }
          aggregate: {
            args: Prisma.EmployesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployes>
          }
          groupBy: {
            args: Prisma.EmployesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployesGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployesCountArgs<ExtArgs>
            result: $Utils.Optional<EmployesCountAggregateOutputType> | number
          }
        }
      }
      BulletinsSalaire: {
        payload: Prisma.$BulletinsSalairePayload<ExtArgs>
        fields: Prisma.BulletinsSalaireFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BulletinsSalaireFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinsSalairePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BulletinsSalaireFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinsSalairePayload>
          }
          findFirst: {
            args: Prisma.BulletinsSalaireFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinsSalairePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BulletinsSalaireFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinsSalairePayload>
          }
          findMany: {
            args: Prisma.BulletinsSalaireFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinsSalairePayload>[]
          }
          create: {
            args: Prisma.BulletinsSalaireCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinsSalairePayload>
          }
          createMany: {
            args: Prisma.BulletinsSalaireCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BulletinsSalaireDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinsSalairePayload>
          }
          update: {
            args: Prisma.BulletinsSalaireUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinsSalairePayload>
          }
          deleteMany: {
            args: Prisma.BulletinsSalaireDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BulletinsSalaireUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BulletinsSalaireUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinsSalairePayload>
          }
          aggregate: {
            args: Prisma.BulletinsSalaireAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBulletinsSalaire>
          }
          groupBy: {
            args: Prisma.BulletinsSalaireGroupByArgs<ExtArgs>
            result: $Utils.Optional<BulletinsSalaireGroupByOutputType>[]
          }
          count: {
            args: Prisma.BulletinsSalaireCountArgs<ExtArgs>
            result: $Utils.Optional<BulletinsSalaireCountAggregateOutputType> | number
          }
        }
      }
      PayRun: {
        payload: Prisma.$PayRunPayload<ExtArgs>
        fields: Prisma.PayRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRunPayload>
          }
          findFirst: {
            args: Prisma.PayRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRunPayload>
          }
          findMany: {
            args: Prisma.PayRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRunPayload>[]
          }
          create: {
            args: Prisma.PayRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRunPayload>
          }
          createMany: {
            args: Prisma.PayRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PayRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRunPayload>
          }
          update: {
            args: Prisma.PayRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRunPayload>
          }
          deleteMany: {
            args: Prisma.PayRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PayRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRunPayload>
          }
          aggregate: {
            args: Prisma.PayRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayRun>
          }
          groupBy: {
            args: Prisma.PayRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayRunCountArgs<ExtArgs>
            result: $Utils.Optional<PayRunCountAggregateOutputType> | number
          }
        }
      }
      Contrat: {
        payload: Prisma.$ContratPayload<ExtArgs>
        fields: Prisma.ContratFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContratFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContratFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratPayload>
          }
          findFirst: {
            args: Prisma.ContratFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContratFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratPayload>
          }
          findMany: {
            args: Prisma.ContratFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratPayload>[]
          }
          create: {
            args: Prisma.ContratCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratPayload>
          }
          createMany: {
            args: Prisma.ContratCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContratDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratPayload>
          }
          update: {
            args: Prisma.ContratUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratPayload>
          }
          deleteMany: {
            args: Prisma.ContratDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContratUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContratUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratPayload>
          }
          aggregate: {
            args: Prisma.ContratAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContrat>
          }
          groupBy: {
            args: Prisma.ContratGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContratGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContratCountArgs<ExtArgs>
            result: $Utils.Optional<ContratCountAggregateOutputType> | number
          }
        }
      }
      Pointages: {
        payload: Prisma.$PointagesPayload<ExtArgs>
        fields: Prisma.PointagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PointagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PointagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointagesPayload>
          }
          findFirst: {
            args: Prisma.PointagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PointagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointagesPayload>
          }
          findMany: {
            args: Prisma.PointagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointagesPayload>[]
          }
          create: {
            args: Prisma.PointagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointagesPayload>
          }
          createMany: {
            args: Prisma.PointagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PointagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointagesPayload>
          }
          update: {
            args: Prisma.PointagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointagesPayload>
          }
          deleteMany: {
            args: Prisma.PointagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PointagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PointagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointagesPayload>
          }
          aggregate: {
            args: Prisma.PointagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePointages>
          }
          groupBy: {
            args: Prisma.PointagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PointagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PointagesCountArgs<ExtArgs>
            result: $Utils.Optional<PointagesCountAggregateOutputType> | number
          }
        }
      }
      Paiement: {
        payload: Prisma.$PaiementPayload<ExtArgs>
        fields: Prisma.PaiementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaiementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaiementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          findFirst: {
            args: Prisma.PaiementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaiementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          findMany: {
            args: Prisma.PaiementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>[]
          }
          create: {
            args: Prisma.PaiementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          createMany: {
            args: Prisma.PaiementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaiementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          update: {
            args: Prisma.PaiementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          deleteMany: {
            args: Prisma.PaiementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaiementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaiementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          aggregate: {
            args: Prisma.PaiementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaiement>
          }
          groupBy: {
            args: Prisma.PaiementGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaiementGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaiementCountArgs<ExtArgs>
            result: $Utils.Optional<PaiementCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    employes?: EmployesOmit
    bulletinsSalaire?: BulletinsSalaireOmit
    payRun?: PayRunOmit
    contrat?: ContratOmit
    pointages?: PointagesOmit
    paiement?: PaiementOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EmployesCountOutputType
   */

  export type EmployesCountOutputType = {
    bulletins: number
    Contrat: number
    pointage: number
  }

  export type EmployesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bulletins?: boolean | EmployesCountOutputTypeCountBulletinsArgs
    Contrat?: boolean | EmployesCountOutputTypeCountContratArgs
    pointage?: boolean | EmployesCountOutputTypeCountPointageArgs
  }

  // Custom InputTypes
  /**
   * EmployesCountOutputType without action
   */
  export type EmployesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployesCountOutputType
     */
    select?: EmployesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployesCountOutputType without action
   */
  export type EmployesCountOutputTypeCountBulletinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BulletinsSalaireWhereInput
  }

  /**
   * EmployesCountOutputType without action
   */
  export type EmployesCountOutputTypeCountContratArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContratWhereInput
  }

  /**
   * EmployesCountOutputType without action
   */
  export type EmployesCountOutputTypeCountPointageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointagesWhereInput
  }


  /**
   * Count Type BulletinsSalaireCountOutputType
   */

  export type BulletinsSalaireCountOutputType = {
    paiements: number
  }

  export type BulletinsSalaireCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paiements?: boolean | BulletinsSalaireCountOutputTypeCountPaiementsArgs
  }

  // Custom InputTypes
  /**
   * BulletinsSalaireCountOutputType without action
   */
  export type BulletinsSalaireCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinsSalaireCountOutputType
     */
    select?: BulletinsSalaireCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BulletinsSalaireCountOutputType without action
   */
  export type BulletinsSalaireCountOutputTypeCountPaiementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaiementWhereInput
  }


  /**
   * Count Type PayRunCountOutputType
   */

  export type PayRunCountOutputType = {
    bulletins: number
  }

  export type PayRunCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bulletins?: boolean | PayRunCountOutputTypeCountBulletinsArgs
  }

  // Custom InputTypes
  /**
   * PayRunCountOutputType without action
   */
  export type PayRunCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRunCountOutputType
     */
    select?: PayRunCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PayRunCountOutputType without action
   */
  export type PayRunCountOutputTypeCountBulletinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BulletinsSalaireWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Employes
   */

  export type AggregateEmployes = {
    _count: EmployesCountAggregateOutputType | null
    _avg: EmployesAvgAggregateOutputType | null
    _sum: EmployesSumAggregateOutputType | null
    _min: EmployesMinAggregateOutputType | null
    _max: EmployesMaxAggregateOutputType | null
  }

  export type EmployesAvgAggregateOutputType = {
    id: number | null
  }

  export type EmployesSumAggregateOutputType = {
    id: number | null
  }

  export type EmployesMinAggregateOutputType = {
    id: number | null
    nom: string | null
    prenom: string | null
    email: string | null
    telephone: string | null
    poste: string | null
    date_embauche: Date | null
    date_arret: Date | null
    typeContrat: $Enums.TypeContrat | null
    role: $Enums.Role | null
    statut: $Enums.Statut | null
  }

  export type EmployesMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    prenom: string | null
    email: string | null
    telephone: string | null
    poste: string | null
    date_embauche: Date | null
    date_arret: Date | null
    typeContrat: $Enums.TypeContrat | null
    role: $Enums.Role | null
    statut: $Enums.Statut | null
  }

  export type EmployesCountAggregateOutputType = {
    id: number
    nom: number
    prenom: number
    email: number
    telephone: number
    poste: number
    date_embauche: number
    date_arret: number
    typeContrat: number
    role: number
    statut: number
    _all: number
  }


  export type EmployesAvgAggregateInputType = {
    id?: true
  }

  export type EmployesSumAggregateInputType = {
    id?: true
  }

  export type EmployesMinAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    telephone?: true
    poste?: true
    date_embauche?: true
    date_arret?: true
    typeContrat?: true
    role?: true
    statut?: true
  }

  export type EmployesMaxAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    telephone?: true
    poste?: true
    date_embauche?: true
    date_arret?: true
    typeContrat?: true
    role?: true
    statut?: true
  }

  export type EmployesCountAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    telephone?: true
    poste?: true
    date_embauche?: true
    date_arret?: true
    typeContrat?: true
    role?: true
    statut?: true
    _all?: true
  }

  export type EmployesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employes to aggregate.
     */
    where?: EmployesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employes to fetch.
     */
    orderBy?: EmployesOrderByWithRelationInput | EmployesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employes
    **/
    _count?: true | EmployesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployesMaxAggregateInputType
  }

  export type GetEmployesAggregateType<T extends EmployesAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployes[P]>
      : GetScalarType<T[P], AggregateEmployes[P]>
  }




  export type EmployesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployesWhereInput
    orderBy?: EmployesOrderByWithAggregationInput | EmployesOrderByWithAggregationInput[]
    by: EmployesScalarFieldEnum[] | EmployesScalarFieldEnum
    having?: EmployesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployesCountAggregateInputType | true
    _avg?: EmployesAvgAggregateInputType
    _sum?: EmployesSumAggregateInputType
    _min?: EmployesMinAggregateInputType
    _max?: EmployesMaxAggregateInputType
  }

  export type EmployesGroupByOutputType = {
    id: number
    nom: string
    prenom: string
    email: string
    telephone: string
    poste: string
    date_embauche: Date
    date_arret: Date | null
    typeContrat: $Enums.TypeContrat
    role: $Enums.Role
    statut: $Enums.Statut
    _count: EmployesCountAggregateOutputType | null
    _avg: EmployesAvgAggregateOutputType | null
    _sum: EmployesSumAggregateOutputType | null
    _min: EmployesMinAggregateOutputType | null
    _max: EmployesMaxAggregateOutputType | null
  }

  type GetEmployesGroupByPayload<T extends EmployesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployesGroupByOutputType[P]>
            : GetScalarType<T[P], EmployesGroupByOutputType[P]>
        }
      >
    >


  export type EmployesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    telephone?: boolean
    poste?: boolean
    date_embauche?: boolean
    date_arret?: boolean
    typeContrat?: boolean
    role?: boolean
    statut?: boolean
    bulletins?: boolean | Employes$bulletinsArgs<ExtArgs>
    Contrat?: boolean | Employes$ContratArgs<ExtArgs>
    pointage?: boolean | Employes$pointageArgs<ExtArgs>
    _count?: boolean | EmployesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employes"]>



  export type EmployesSelectScalar = {
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    telephone?: boolean
    poste?: boolean
    date_embauche?: boolean
    date_arret?: boolean
    typeContrat?: boolean
    role?: boolean
    statut?: boolean
  }

  export type EmployesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "prenom" | "email" | "telephone" | "poste" | "date_embauche" | "date_arret" | "typeContrat" | "role" | "statut", ExtArgs["result"]["employes"]>
  export type EmployesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bulletins?: boolean | Employes$bulletinsArgs<ExtArgs>
    Contrat?: boolean | Employes$ContratArgs<ExtArgs>
    pointage?: boolean | Employes$pointageArgs<ExtArgs>
    _count?: boolean | EmployesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EmployesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employes"
    objects: {
      bulletins: Prisma.$BulletinsSalairePayload<ExtArgs>[]
      Contrat: Prisma.$ContratPayload<ExtArgs>[]
      pointage: Prisma.$PointagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      prenom: string
      email: string
      telephone: string
      poste: string
      date_embauche: Date
      date_arret: Date | null
      typeContrat: $Enums.TypeContrat
      role: $Enums.Role
      statut: $Enums.Statut
    }, ExtArgs["result"]["employes"]>
    composites: {}
  }

  type EmployesGetPayload<S extends boolean | null | undefined | EmployesDefaultArgs> = $Result.GetResult<Prisma.$EmployesPayload, S>

  type EmployesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployesCountAggregateInputType | true
    }

  export interface EmployesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employes'], meta: { name: 'Employes' } }
    /**
     * Find zero or one Employes that matches the filter.
     * @param {EmployesFindUniqueArgs} args - Arguments to find a Employes
     * @example
     * // Get one Employes
     * const employes = await prisma.employes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployesFindUniqueArgs>(args: SelectSubset<T, EmployesFindUniqueArgs<ExtArgs>>): Prisma__EmployesClient<$Result.GetResult<Prisma.$EmployesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployesFindUniqueOrThrowArgs} args - Arguments to find a Employes
     * @example
     * // Get one Employes
     * const employes = await prisma.employes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployesFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployesClient<$Result.GetResult<Prisma.$EmployesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployesFindFirstArgs} args - Arguments to find a Employes
     * @example
     * // Get one Employes
     * const employes = await prisma.employes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployesFindFirstArgs>(args?: SelectSubset<T, EmployesFindFirstArgs<ExtArgs>>): Prisma__EmployesClient<$Result.GetResult<Prisma.$EmployesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployesFindFirstOrThrowArgs} args - Arguments to find a Employes
     * @example
     * // Get one Employes
     * const employes = await prisma.employes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployesFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployesFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployesClient<$Result.GetResult<Prisma.$EmployesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employes
     * const employes = await prisma.employes.findMany()
     * 
     * // Get first 10 Employes
     * const employes = await prisma.employes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employesWithIdOnly = await prisma.employes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployesFindManyArgs>(args?: SelectSubset<T, EmployesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employes.
     * @param {EmployesCreateArgs} args - Arguments to create a Employes.
     * @example
     * // Create one Employes
     * const Employes = await prisma.employes.create({
     *   data: {
     *     // ... data to create a Employes
     *   }
     * })
     * 
     */
    create<T extends EmployesCreateArgs>(args: SelectSubset<T, EmployesCreateArgs<ExtArgs>>): Prisma__EmployesClient<$Result.GetResult<Prisma.$EmployesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employes.
     * @param {EmployesCreateManyArgs} args - Arguments to create many Employes.
     * @example
     * // Create many Employes
     * const employes = await prisma.employes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployesCreateManyArgs>(args?: SelectSubset<T, EmployesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employes.
     * @param {EmployesDeleteArgs} args - Arguments to delete one Employes.
     * @example
     * // Delete one Employes
     * const Employes = await prisma.employes.delete({
     *   where: {
     *     // ... filter to delete one Employes
     *   }
     * })
     * 
     */
    delete<T extends EmployesDeleteArgs>(args: SelectSubset<T, EmployesDeleteArgs<ExtArgs>>): Prisma__EmployesClient<$Result.GetResult<Prisma.$EmployesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employes.
     * @param {EmployesUpdateArgs} args - Arguments to update one Employes.
     * @example
     * // Update one Employes
     * const employes = await prisma.employes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployesUpdateArgs>(args: SelectSubset<T, EmployesUpdateArgs<ExtArgs>>): Prisma__EmployesClient<$Result.GetResult<Prisma.$EmployesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employes.
     * @param {EmployesDeleteManyArgs} args - Arguments to filter Employes to delete.
     * @example
     * // Delete a few Employes
     * const { count } = await prisma.employes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployesDeleteManyArgs>(args?: SelectSubset<T, EmployesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employes
     * const employes = await prisma.employes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployesUpdateManyArgs>(args: SelectSubset<T, EmployesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employes.
     * @param {EmployesUpsertArgs} args - Arguments to update or create a Employes.
     * @example
     * // Update or create a Employes
     * const employes = await prisma.employes.upsert({
     *   create: {
     *     // ... data to create a Employes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employes we want to update
     *   }
     * })
     */
    upsert<T extends EmployesUpsertArgs>(args: SelectSubset<T, EmployesUpsertArgs<ExtArgs>>): Prisma__EmployesClient<$Result.GetResult<Prisma.$EmployesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployesCountArgs} args - Arguments to filter Employes to count.
     * @example
     * // Count the number of Employes
     * const count = await prisma.employes.count({
     *   where: {
     *     // ... the filter for the Employes we want to count
     *   }
     * })
    **/
    count<T extends EmployesCountArgs>(
      args?: Subset<T, EmployesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployesAggregateArgs>(args: Subset<T, EmployesAggregateArgs>): Prisma.PrismaPromise<GetEmployesAggregateType<T>>

    /**
     * Group by Employes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployesGroupByArgs['orderBy'] }
        : { orderBy?: EmployesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employes model
   */
  readonly fields: EmployesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bulletins<T extends Employes$bulletinsArgs<ExtArgs> = {}>(args?: Subset<T, Employes$bulletinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulletinsSalairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Contrat<T extends Employes$ContratArgs<ExtArgs> = {}>(args?: Subset<T, Employes$ContratArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pointage<T extends Employes$pointageArgs<ExtArgs> = {}>(args?: Subset<T, Employes$pointageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employes model
   */
  interface EmployesFieldRefs {
    readonly id: FieldRef<"Employes", 'Int'>
    readonly nom: FieldRef<"Employes", 'String'>
    readonly prenom: FieldRef<"Employes", 'String'>
    readonly email: FieldRef<"Employes", 'String'>
    readonly telephone: FieldRef<"Employes", 'String'>
    readonly poste: FieldRef<"Employes", 'String'>
    readonly date_embauche: FieldRef<"Employes", 'DateTime'>
    readonly date_arret: FieldRef<"Employes", 'DateTime'>
    readonly typeContrat: FieldRef<"Employes", 'TypeContrat'>
    readonly role: FieldRef<"Employes", 'Role'>
    readonly statut: FieldRef<"Employes", 'Statut'>
  }
    

  // Custom InputTypes
  /**
   * Employes findUnique
   */
  export type EmployesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employes
     */
    select?: EmployesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employes
     */
    omit?: EmployesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployesInclude<ExtArgs> | null
    /**
     * Filter, which Employes to fetch.
     */
    where: EmployesWhereUniqueInput
  }

  /**
   * Employes findUniqueOrThrow
   */
  export type EmployesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employes
     */
    select?: EmployesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employes
     */
    omit?: EmployesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployesInclude<ExtArgs> | null
    /**
     * Filter, which Employes to fetch.
     */
    where: EmployesWhereUniqueInput
  }

  /**
   * Employes findFirst
   */
  export type EmployesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employes
     */
    select?: EmployesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employes
     */
    omit?: EmployesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployesInclude<ExtArgs> | null
    /**
     * Filter, which Employes to fetch.
     */
    where?: EmployesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employes to fetch.
     */
    orderBy?: EmployesOrderByWithRelationInput | EmployesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employes.
     */
    cursor?: EmployesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employes.
     */
    distinct?: EmployesScalarFieldEnum | EmployesScalarFieldEnum[]
  }

  /**
   * Employes findFirstOrThrow
   */
  export type EmployesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employes
     */
    select?: EmployesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employes
     */
    omit?: EmployesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployesInclude<ExtArgs> | null
    /**
     * Filter, which Employes to fetch.
     */
    where?: EmployesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employes to fetch.
     */
    orderBy?: EmployesOrderByWithRelationInput | EmployesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employes.
     */
    cursor?: EmployesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employes.
     */
    distinct?: EmployesScalarFieldEnum | EmployesScalarFieldEnum[]
  }

  /**
   * Employes findMany
   */
  export type EmployesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employes
     */
    select?: EmployesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employes
     */
    omit?: EmployesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployesInclude<ExtArgs> | null
    /**
     * Filter, which Employes to fetch.
     */
    where?: EmployesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employes to fetch.
     */
    orderBy?: EmployesOrderByWithRelationInput | EmployesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employes.
     */
    cursor?: EmployesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employes.
     */
    skip?: number
    distinct?: EmployesScalarFieldEnum | EmployesScalarFieldEnum[]
  }

  /**
   * Employes create
   */
  export type EmployesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employes
     */
    select?: EmployesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employes
     */
    omit?: EmployesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployesInclude<ExtArgs> | null
    /**
     * The data needed to create a Employes.
     */
    data: XOR<EmployesCreateInput, EmployesUncheckedCreateInput>
  }

  /**
   * Employes createMany
   */
  export type EmployesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employes.
     */
    data: EmployesCreateManyInput | EmployesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employes update
   */
  export type EmployesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employes
     */
    select?: EmployesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employes
     */
    omit?: EmployesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployesInclude<ExtArgs> | null
    /**
     * The data needed to update a Employes.
     */
    data: XOR<EmployesUpdateInput, EmployesUncheckedUpdateInput>
    /**
     * Choose, which Employes to update.
     */
    where: EmployesWhereUniqueInput
  }

  /**
   * Employes updateMany
   */
  export type EmployesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employes.
     */
    data: XOR<EmployesUpdateManyMutationInput, EmployesUncheckedUpdateManyInput>
    /**
     * Filter which Employes to update
     */
    where?: EmployesWhereInput
    /**
     * Limit how many Employes to update.
     */
    limit?: number
  }

  /**
   * Employes upsert
   */
  export type EmployesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employes
     */
    select?: EmployesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employes
     */
    omit?: EmployesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployesInclude<ExtArgs> | null
    /**
     * The filter to search for the Employes to update in case it exists.
     */
    where: EmployesWhereUniqueInput
    /**
     * In case the Employes found by the `where` argument doesn't exist, create a new Employes with this data.
     */
    create: XOR<EmployesCreateInput, EmployesUncheckedCreateInput>
    /**
     * In case the Employes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployesUpdateInput, EmployesUncheckedUpdateInput>
  }

  /**
   * Employes delete
   */
  export type EmployesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employes
     */
    select?: EmployesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employes
     */
    omit?: EmployesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployesInclude<ExtArgs> | null
    /**
     * Filter which Employes to delete.
     */
    where: EmployesWhereUniqueInput
  }

  /**
   * Employes deleteMany
   */
  export type EmployesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employes to delete
     */
    where?: EmployesWhereInput
    /**
     * Limit how many Employes to delete.
     */
    limit?: number
  }

  /**
   * Employes.bulletins
   */
  export type Employes$bulletinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinsSalaire
     */
    select?: BulletinsSalaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletinsSalaire
     */
    omit?: BulletinsSalaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinsSalaireInclude<ExtArgs> | null
    where?: BulletinsSalaireWhereInput
    orderBy?: BulletinsSalaireOrderByWithRelationInput | BulletinsSalaireOrderByWithRelationInput[]
    cursor?: BulletinsSalaireWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BulletinsSalaireScalarFieldEnum | BulletinsSalaireScalarFieldEnum[]
  }

  /**
   * Employes.Contrat
   */
  export type Employes$ContratArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrat
     */
    select?: ContratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrat
     */
    omit?: ContratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratInclude<ExtArgs> | null
    where?: ContratWhereInput
    orderBy?: ContratOrderByWithRelationInput | ContratOrderByWithRelationInput[]
    cursor?: ContratWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContratScalarFieldEnum | ContratScalarFieldEnum[]
  }

  /**
   * Employes.pointage
   */
  export type Employes$pointageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pointages
     */
    select?: PointagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pointages
     */
    omit?: PointagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointagesInclude<ExtArgs> | null
    where?: PointagesWhereInput
    orderBy?: PointagesOrderByWithRelationInput | PointagesOrderByWithRelationInput[]
    cursor?: PointagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PointagesScalarFieldEnum | PointagesScalarFieldEnum[]
  }

  /**
   * Employes without action
   */
  export type EmployesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employes
     */
    select?: EmployesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employes
     */
    omit?: EmployesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployesInclude<ExtArgs> | null
  }


  /**
   * Model BulletinsSalaire
   */

  export type AggregateBulletinsSalaire = {
    _count: BulletinsSalaireCountAggregateOutputType | null
    _avg: BulletinsSalaireAvgAggregateOutputType | null
    _sum: BulletinsSalaireSumAggregateOutputType | null
    _min: BulletinsSalaireMinAggregateOutputType | null
    _max: BulletinsSalaireMaxAggregateOutputType | null
  }

  export type BulletinsSalaireAvgAggregateOutputType = {
    id: number | null
    salaire_base: Decimal | null
    deductions: Decimal | null
    salaire_net: Decimal | null
    payRunId: number | null
    employeId: number | null
  }

  export type BulletinsSalaireSumAggregateOutputType = {
    id: number | null
    salaire_base: Decimal | null
    deductions: Decimal | null
    salaire_net: Decimal | null
    payRunId: number | null
    employeId: number | null
  }

  export type BulletinsSalaireMinAggregateOutputType = {
    id: number | null
    mois: string | null
    salaire_base: Decimal | null
    deductions: Decimal | null
    salaire_net: Decimal | null
    date_generation: Date | null
    payRunId: number | null
    employeId: number | null
  }

  export type BulletinsSalaireMaxAggregateOutputType = {
    id: number | null
    mois: string | null
    salaire_base: Decimal | null
    deductions: Decimal | null
    salaire_net: Decimal | null
    date_generation: Date | null
    payRunId: number | null
    employeId: number | null
  }

  export type BulletinsSalaireCountAggregateOutputType = {
    id: number
    mois: number
    salaire_base: number
    deductions: number
    salaire_net: number
    date_generation: number
    payRunId: number
    employeId: number
    _all: number
  }


  export type BulletinsSalaireAvgAggregateInputType = {
    id?: true
    salaire_base?: true
    deductions?: true
    salaire_net?: true
    payRunId?: true
    employeId?: true
  }

  export type BulletinsSalaireSumAggregateInputType = {
    id?: true
    salaire_base?: true
    deductions?: true
    salaire_net?: true
    payRunId?: true
    employeId?: true
  }

  export type BulletinsSalaireMinAggregateInputType = {
    id?: true
    mois?: true
    salaire_base?: true
    deductions?: true
    salaire_net?: true
    date_generation?: true
    payRunId?: true
    employeId?: true
  }

  export type BulletinsSalaireMaxAggregateInputType = {
    id?: true
    mois?: true
    salaire_base?: true
    deductions?: true
    salaire_net?: true
    date_generation?: true
    payRunId?: true
    employeId?: true
  }

  export type BulletinsSalaireCountAggregateInputType = {
    id?: true
    mois?: true
    salaire_base?: true
    deductions?: true
    salaire_net?: true
    date_generation?: true
    payRunId?: true
    employeId?: true
    _all?: true
  }

  export type BulletinsSalaireAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BulletinsSalaire to aggregate.
     */
    where?: BulletinsSalaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulletinsSalaires to fetch.
     */
    orderBy?: BulletinsSalaireOrderByWithRelationInput | BulletinsSalaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BulletinsSalaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulletinsSalaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulletinsSalaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BulletinsSalaires
    **/
    _count?: true | BulletinsSalaireCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BulletinsSalaireAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BulletinsSalaireSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BulletinsSalaireMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BulletinsSalaireMaxAggregateInputType
  }

  export type GetBulletinsSalaireAggregateType<T extends BulletinsSalaireAggregateArgs> = {
        [P in keyof T & keyof AggregateBulletinsSalaire]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBulletinsSalaire[P]>
      : GetScalarType<T[P], AggregateBulletinsSalaire[P]>
  }




  export type BulletinsSalaireGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BulletinsSalaireWhereInput
    orderBy?: BulletinsSalaireOrderByWithAggregationInput | BulletinsSalaireOrderByWithAggregationInput[]
    by: BulletinsSalaireScalarFieldEnum[] | BulletinsSalaireScalarFieldEnum
    having?: BulletinsSalaireScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BulletinsSalaireCountAggregateInputType | true
    _avg?: BulletinsSalaireAvgAggregateInputType
    _sum?: BulletinsSalaireSumAggregateInputType
    _min?: BulletinsSalaireMinAggregateInputType
    _max?: BulletinsSalaireMaxAggregateInputType
  }

  export type BulletinsSalaireGroupByOutputType = {
    id: number
    mois: string
    salaire_base: Decimal | null
    deductions: Decimal
    salaire_net: Decimal
    date_generation: Date
    payRunId: number
    employeId: number
    _count: BulletinsSalaireCountAggregateOutputType | null
    _avg: BulletinsSalaireAvgAggregateOutputType | null
    _sum: BulletinsSalaireSumAggregateOutputType | null
    _min: BulletinsSalaireMinAggregateOutputType | null
    _max: BulletinsSalaireMaxAggregateOutputType | null
  }

  type GetBulletinsSalaireGroupByPayload<T extends BulletinsSalaireGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BulletinsSalaireGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BulletinsSalaireGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BulletinsSalaireGroupByOutputType[P]>
            : GetScalarType<T[P], BulletinsSalaireGroupByOutputType[P]>
        }
      >
    >


  export type BulletinsSalaireSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mois?: boolean
    salaire_base?: boolean
    deductions?: boolean
    salaire_net?: boolean
    date_generation?: boolean
    payRunId?: boolean
    employeId?: boolean
    payRun?: boolean | PayRunDefaultArgs<ExtArgs>
    employe?: boolean | EmployesDefaultArgs<ExtArgs>
    paiements?: boolean | BulletinsSalaire$paiementsArgs<ExtArgs>
    _count?: boolean | BulletinsSalaireCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bulletinsSalaire"]>



  export type BulletinsSalaireSelectScalar = {
    id?: boolean
    mois?: boolean
    salaire_base?: boolean
    deductions?: boolean
    salaire_net?: boolean
    date_generation?: boolean
    payRunId?: boolean
    employeId?: boolean
  }

  export type BulletinsSalaireOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mois" | "salaire_base" | "deductions" | "salaire_net" | "date_generation" | "payRunId" | "employeId", ExtArgs["result"]["bulletinsSalaire"]>
  export type BulletinsSalaireInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payRun?: boolean | PayRunDefaultArgs<ExtArgs>
    employe?: boolean | EmployesDefaultArgs<ExtArgs>
    paiements?: boolean | BulletinsSalaire$paiementsArgs<ExtArgs>
    _count?: boolean | BulletinsSalaireCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BulletinsSalairePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BulletinsSalaire"
    objects: {
      payRun: Prisma.$PayRunPayload<ExtArgs>
      employe: Prisma.$EmployesPayload<ExtArgs>
      paiements: Prisma.$PaiementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mois: string
      salaire_base: Prisma.Decimal | null
      deductions: Prisma.Decimal
      salaire_net: Prisma.Decimal
      date_generation: Date
      payRunId: number
      employeId: number
    }, ExtArgs["result"]["bulletinsSalaire"]>
    composites: {}
  }

  type BulletinsSalaireGetPayload<S extends boolean | null | undefined | BulletinsSalaireDefaultArgs> = $Result.GetResult<Prisma.$BulletinsSalairePayload, S>

  type BulletinsSalaireCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BulletinsSalaireFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BulletinsSalaireCountAggregateInputType | true
    }

  export interface BulletinsSalaireDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BulletinsSalaire'], meta: { name: 'BulletinsSalaire' } }
    /**
     * Find zero or one BulletinsSalaire that matches the filter.
     * @param {BulletinsSalaireFindUniqueArgs} args - Arguments to find a BulletinsSalaire
     * @example
     * // Get one BulletinsSalaire
     * const bulletinsSalaire = await prisma.bulletinsSalaire.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BulletinsSalaireFindUniqueArgs>(args: SelectSubset<T, BulletinsSalaireFindUniqueArgs<ExtArgs>>): Prisma__BulletinsSalaireClient<$Result.GetResult<Prisma.$BulletinsSalairePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BulletinsSalaire that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BulletinsSalaireFindUniqueOrThrowArgs} args - Arguments to find a BulletinsSalaire
     * @example
     * // Get one BulletinsSalaire
     * const bulletinsSalaire = await prisma.bulletinsSalaire.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BulletinsSalaireFindUniqueOrThrowArgs>(args: SelectSubset<T, BulletinsSalaireFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BulletinsSalaireClient<$Result.GetResult<Prisma.$BulletinsSalairePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BulletinsSalaire that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinsSalaireFindFirstArgs} args - Arguments to find a BulletinsSalaire
     * @example
     * // Get one BulletinsSalaire
     * const bulletinsSalaire = await prisma.bulletinsSalaire.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BulletinsSalaireFindFirstArgs>(args?: SelectSubset<T, BulletinsSalaireFindFirstArgs<ExtArgs>>): Prisma__BulletinsSalaireClient<$Result.GetResult<Prisma.$BulletinsSalairePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BulletinsSalaire that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinsSalaireFindFirstOrThrowArgs} args - Arguments to find a BulletinsSalaire
     * @example
     * // Get one BulletinsSalaire
     * const bulletinsSalaire = await prisma.bulletinsSalaire.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BulletinsSalaireFindFirstOrThrowArgs>(args?: SelectSubset<T, BulletinsSalaireFindFirstOrThrowArgs<ExtArgs>>): Prisma__BulletinsSalaireClient<$Result.GetResult<Prisma.$BulletinsSalairePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BulletinsSalaires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinsSalaireFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BulletinsSalaires
     * const bulletinsSalaires = await prisma.bulletinsSalaire.findMany()
     * 
     * // Get first 10 BulletinsSalaires
     * const bulletinsSalaires = await prisma.bulletinsSalaire.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bulletinsSalaireWithIdOnly = await prisma.bulletinsSalaire.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BulletinsSalaireFindManyArgs>(args?: SelectSubset<T, BulletinsSalaireFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulletinsSalairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BulletinsSalaire.
     * @param {BulletinsSalaireCreateArgs} args - Arguments to create a BulletinsSalaire.
     * @example
     * // Create one BulletinsSalaire
     * const BulletinsSalaire = await prisma.bulletinsSalaire.create({
     *   data: {
     *     // ... data to create a BulletinsSalaire
     *   }
     * })
     * 
     */
    create<T extends BulletinsSalaireCreateArgs>(args: SelectSubset<T, BulletinsSalaireCreateArgs<ExtArgs>>): Prisma__BulletinsSalaireClient<$Result.GetResult<Prisma.$BulletinsSalairePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BulletinsSalaires.
     * @param {BulletinsSalaireCreateManyArgs} args - Arguments to create many BulletinsSalaires.
     * @example
     * // Create many BulletinsSalaires
     * const bulletinsSalaire = await prisma.bulletinsSalaire.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BulletinsSalaireCreateManyArgs>(args?: SelectSubset<T, BulletinsSalaireCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BulletinsSalaire.
     * @param {BulletinsSalaireDeleteArgs} args - Arguments to delete one BulletinsSalaire.
     * @example
     * // Delete one BulletinsSalaire
     * const BulletinsSalaire = await prisma.bulletinsSalaire.delete({
     *   where: {
     *     // ... filter to delete one BulletinsSalaire
     *   }
     * })
     * 
     */
    delete<T extends BulletinsSalaireDeleteArgs>(args: SelectSubset<T, BulletinsSalaireDeleteArgs<ExtArgs>>): Prisma__BulletinsSalaireClient<$Result.GetResult<Prisma.$BulletinsSalairePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BulletinsSalaire.
     * @param {BulletinsSalaireUpdateArgs} args - Arguments to update one BulletinsSalaire.
     * @example
     * // Update one BulletinsSalaire
     * const bulletinsSalaire = await prisma.bulletinsSalaire.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BulletinsSalaireUpdateArgs>(args: SelectSubset<T, BulletinsSalaireUpdateArgs<ExtArgs>>): Prisma__BulletinsSalaireClient<$Result.GetResult<Prisma.$BulletinsSalairePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BulletinsSalaires.
     * @param {BulletinsSalaireDeleteManyArgs} args - Arguments to filter BulletinsSalaires to delete.
     * @example
     * // Delete a few BulletinsSalaires
     * const { count } = await prisma.bulletinsSalaire.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BulletinsSalaireDeleteManyArgs>(args?: SelectSubset<T, BulletinsSalaireDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BulletinsSalaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinsSalaireUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BulletinsSalaires
     * const bulletinsSalaire = await prisma.bulletinsSalaire.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BulletinsSalaireUpdateManyArgs>(args: SelectSubset<T, BulletinsSalaireUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BulletinsSalaire.
     * @param {BulletinsSalaireUpsertArgs} args - Arguments to update or create a BulletinsSalaire.
     * @example
     * // Update or create a BulletinsSalaire
     * const bulletinsSalaire = await prisma.bulletinsSalaire.upsert({
     *   create: {
     *     // ... data to create a BulletinsSalaire
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BulletinsSalaire we want to update
     *   }
     * })
     */
    upsert<T extends BulletinsSalaireUpsertArgs>(args: SelectSubset<T, BulletinsSalaireUpsertArgs<ExtArgs>>): Prisma__BulletinsSalaireClient<$Result.GetResult<Prisma.$BulletinsSalairePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BulletinsSalaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinsSalaireCountArgs} args - Arguments to filter BulletinsSalaires to count.
     * @example
     * // Count the number of BulletinsSalaires
     * const count = await prisma.bulletinsSalaire.count({
     *   where: {
     *     // ... the filter for the BulletinsSalaires we want to count
     *   }
     * })
    **/
    count<T extends BulletinsSalaireCountArgs>(
      args?: Subset<T, BulletinsSalaireCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BulletinsSalaireCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BulletinsSalaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinsSalaireAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BulletinsSalaireAggregateArgs>(args: Subset<T, BulletinsSalaireAggregateArgs>): Prisma.PrismaPromise<GetBulletinsSalaireAggregateType<T>>

    /**
     * Group by BulletinsSalaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinsSalaireGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BulletinsSalaireGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BulletinsSalaireGroupByArgs['orderBy'] }
        : { orderBy?: BulletinsSalaireGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BulletinsSalaireGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBulletinsSalaireGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BulletinsSalaire model
   */
  readonly fields: BulletinsSalaireFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BulletinsSalaire.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BulletinsSalaireClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payRun<T extends PayRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PayRunDefaultArgs<ExtArgs>>): Prisma__PayRunClient<$Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employe<T extends EmployesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployesDefaultArgs<ExtArgs>>): Prisma__EmployesClient<$Result.GetResult<Prisma.$EmployesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    paiements<T extends BulletinsSalaire$paiementsArgs<ExtArgs> = {}>(args?: Subset<T, BulletinsSalaire$paiementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BulletinsSalaire model
   */
  interface BulletinsSalaireFieldRefs {
    readonly id: FieldRef<"BulletinsSalaire", 'Int'>
    readonly mois: FieldRef<"BulletinsSalaire", 'String'>
    readonly salaire_base: FieldRef<"BulletinsSalaire", 'Decimal'>
    readonly deductions: FieldRef<"BulletinsSalaire", 'Decimal'>
    readonly salaire_net: FieldRef<"BulletinsSalaire", 'Decimal'>
    readonly date_generation: FieldRef<"BulletinsSalaire", 'DateTime'>
    readonly payRunId: FieldRef<"BulletinsSalaire", 'Int'>
    readonly employeId: FieldRef<"BulletinsSalaire", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BulletinsSalaire findUnique
   */
  export type BulletinsSalaireFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinsSalaire
     */
    select?: BulletinsSalaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletinsSalaire
     */
    omit?: BulletinsSalaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinsSalaireInclude<ExtArgs> | null
    /**
     * Filter, which BulletinsSalaire to fetch.
     */
    where: BulletinsSalaireWhereUniqueInput
  }

  /**
   * BulletinsSalaire findUniqueOrThrow
   */
  export type BulletinsSalaireFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinsSalaire
     */
    select?: BulletinsSalaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletinsSalaire
     */
    omit?: BulletinsSalaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinsSalaireInclude<ExtArgs> | null
    /**
     * Filter, which BulletinsSalaire to fetch.
     */
    where: BulletinsSalaireWhereUniqueInput
  }

  /**
   * BulletinsSalaire findFirst
   */
  export type BulletinsSalaireFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinsSalaire
     */
    select?: BulletinsSalaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletinsSalaire
     */
    omit?: BulletinsSalaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinsSalaireInclude<ExtArgs> | null
    /**
     * Filter, which BulletinsSalaire to fetch.
     */
    where?: BulletinsSalaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulletinsSalaires to fetch.
     */
    orderBy?: BulletinsSalaireOrderByWithRelationInput | BulletinsSalaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BulletinsSalaires.
     */
    cursor?: BulletinsSalaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulletinsSalaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulletinsSalaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BulletinsSalaires.
     */
    distinct?: BulletinsSalaireScalarFieldEnum | BulletinsSalaireScalarFieldEnum[]
  }

  /**
   * BulletinsSalaire findFirstOrThrow
   */
  export type BulletinsSalaireFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinsSalaire
     */
    select?: BulletinsSalaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletinsSalaire
     */
    omit?: BulletinsSalaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinsSalaireInclude<ExtArgs> | null
    /**
     * Filter, which BulletinsSalaire to fetch.
     */
    where?: BulletinsSalaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulletinsSalaires to fetch.
     */
    orderBy?: BulletinsSalaireOrderByWithRelationInput | BulletinsSalaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BulletinsSalaires.
     */
    cursor?: BulletinsSalaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulletinsSalaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulletinsSalaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BulletinsSalaires.
     */
    distinct?: BulletinsSalaireScalarFieldEnum | BulletinsSalaireScalarFieldEnum[]
  }

  /**
   * BulletinsSalaire findMany
   */
  export type BulletinsSalaireFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinsSalaire
     */
    select?: BulletinsSalaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletinsSalaire
     */
    omit?: BulletinsSalaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinsSalaireInclude<ExtArgs> | null
    /**
     * Filter, which BulletinsSalaires to fetch.
     */
    where?: BulletinsSalaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulletinsSalaires to fetch.
     */
    orderBy?: BulletinsSalaireOrderByWithRelationInput | BulletinsSalaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BulletinsSalaires.
     */
    cursor?: BulletinsSalaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulletinsSalaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulletinsSalaires.
     */
    skip?: number
    distinct?: BulletinsSalaireScalarFieldEnum | BulletinsSalaireScalarFieldEnum[]
  }

  /**
   * BulletinsSalaire create
   */
  export type BulletinsSalaireCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinsSalaire
     */
    select?: BulletinsSalaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletinsSalaire
     */
    omit?: BulletinsSalaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinsSalaireInclude<ExtArgs> | null
    /**
     * The data needed to create a BulletinsSalaire.
     */
    data: XOR<BulletinsSalaireCreateInput, BulletinsSalaireUncheckedCreateInput>
  }

  /**
   * BulletinsSalaire createMany
   */
  export type BulletinsSalaireCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BulletinsSalaires.
     */
    data: BulletinsSalaireCreateManyInput | BulletinsSalaireCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BulletinsSalaire update
   */
  export type BulletinsSalaireUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinsSalaire
     */
    select?: BulletinsSalaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletinsSalaire
     */
    omit?: BulletinsSalaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinsSalaireInclude<ExtArgs> | null
    /**
     * The data needed to update a BulletinsSalaire.
     */
    data: XOR<BulletinsSalaireUpdateInput, BulletinsSalaireUncheckedUpdateInput>
    /**
     * Choose, which BulletinsSalaire to update.
     */
    where: BulletinsSalaireWhereUniqueInput
  }

  /**
   * BulletinsSalaire updateMany
   */
  export type BulletinsSalaireUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BulletinsSalaires.
     */
    data: XOR<BulletinsSalaireUpdateManyMutationInput, BulletinsSalaireUncheckedUpdateManyInput>
    /**
     * Filter which BulletinsSalaires to update
     */
    where?: BulletinsSalaireWhereInput
    /**
     * Limit how many BulletinsSalaires to update.
     */
    limit?: number
  }

  /**
   * BulletinsSalaire upsert
   */
  export type BulletinsSalaireUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinsSalaire
     */
    select?: BulletinsSalaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletinsSalaire
     */
    omit?: BulletinsSalaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinsSalaireInclude<ExtArgs> | null
    /**
     * The filter to search for the BulletinsSalaire to update in case it exists.
     */
    where: BulletinsSalaireWhereUniqueInput
    /**
     * In case the BulletinsSalaire found by the `where` argument doesn't exist, create a new BulletinsSalaire with this data.
     */
    create: XOR<BulletinsSalaireCreateInput, BulletinsSalaireUncheckedCreateInput>
    /**
     * In case the BulletinsSalaire was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BulletinsSalaireUpdateInput, BulletinsSalaireUncheckedUpdateInput>
  }

  /**
   * BulletinsSalaire delete
   */
  export type BulletinsSalaireDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinsSalaire
     */
    select?: BulletinsSalaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletinsSalaire
     */
    omit?: BulletinsSalaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinsSalaireInclude<ExtArgs> | null
    /**
     * Filter which BulletinsSalaire to delete.
     */
    where: BulletinsSalaireWhereUniqueInput
  }

  /**
   * BulletinsSalaire deleteMany
   */
  export type BulletinsSalaireDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BulletinsSalaires to delete
     */
    where?: BulletinsSalaireWhereInput
    /**
     * Limit how many BulletinsSalaires to delete.
     */
    limit?: number
  }

  /**
   * BulletinsSalaire.paiements
   */
  export type BulletinsSalaire$paiementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    where?: PaiementWhereInput
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    cursor?: PaiementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * BulletinsSalaire without action
   */
  export type BulletinsSalaireDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinsSalaire
     */
    select?: BulletinsSalaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletinsSalaire
     */
    omit?: BulletinsSalaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinsSalaireInclude<ExtArgs> | null
  }


  /**
   * Model PayRun
   */

  export type AggregatePayRun = {
    _count: PayRunCountAggregateOutputType | null
    _avg: PayRunAvgAggregateOutputType | null
    _sum: PayRunSumAggregateOutputType | null
    _min: PayRunMinAggregateOutputType | null
    _max: PayRunMaxAggregateOutputType | null
  }

  export type PayRunAvgAggregateOutputType = {
    id: number | null
  }

  export type PayRunSumAggregateOutputType = {
    id: number | null
  }

  export type PayRunMinAggregateOutputType = {
    id: number | null
    periodeDebut: Date | null
    periodeFin: Date | null
    statut: $Enums.PayRunStatut | null
    typePayRun: $Enums.TypePayRun | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayRunMaxAggregateOutputType = {
    id: number | null
    periodeDebut: Date | null
    periodeFin: Date | null
    statut: $Enums.PayRunStatut | null
    typePayRun: $Enums.TypePayRun | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayRunCountAggregateOutputType = {
    id: number
    periodeDebut: number
    periodeFin: number
    statut: number
    typePayRun: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PayRunAvgAggregateInputType = {
    id?: true
  }

  export type PayRunSumAggregateInputType = {
    id?: true
  }

  export type PayRunMinAggregateInputType = {
    id?: true
    periodeDebut?: true
    periodeFin?: true
    statut?: true
    typePayRun?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayRunMaxAggregateInputType = {
    id?: true
    periodeDebut?: true
    periodeFin?: true
    statut?: true
    typePayRun?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayRunCountAggregateInputType = {
    id?: true
    periodeDebut?: true
    periodeFin?: true
    statut?: true
    typePayRun?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PayRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayRun to aggregate.
     */
    where?: PayRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayRuns to fetch.
     */
    orderBy?: PayRunOrderByWithRelationInput | PayRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PayRuns
    **/
    _count?: true | PayRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayRunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayRunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayRunMaxAggregateInputType
  }

  export type GetPayRunAggregateType<T extends PayRunAggregateArgs> = {
        [P in keyof T & keyof AggregatePayRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayRun[P]>
      : GetScalarType<T[P], AggregatePayRun[P]>
  }




  export type PayRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayRunWhereInput
    orderBy?: PayRunOrderByWithAggregationInput | PayRunOrderByWithAggregationInput[]
    by: PayRunScalarFieldEnum[] | PayRunScalarFieldEnum
    having?: PayRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayRunCountAggregateInputType | true
    _avg?: PayRunAvgAggregateInputType
    _sum?: PayRunSumAggregateInputType
    _min?: PayRunMinAggregateInputType
    _max?: PayRunMaxAggregateInputType
  }

  export type PayRunGroupByOutputType = {
    id: number
    periodeDebut: Date
    periodeFin: Date
    statut: $Enums.PayRunStatut
    typePayRun: $Enums.TypePayRun
    createdAt: Date
    updatedAt: Date
    _count: PayRunCountAggregateOutputType | null
    _avg: PayRunAvgAggregateOutputType | null
    _sum: PayRunSumAggregateOutputType | null
    _min: PayRunMinAggregateOutputType | null
    _max: PayRunMaxAggregateOutputType | null
  }

  type GetPayRunGroupByPayload<T extends PayRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayRunGroupByOutputType[P]>
            : GetScalarType<T[P], PayRunGroupByOutputType[P]>
        }
      >
    >


  export type PayRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    periodeDebut?: boolean
    periodeFin?: boolean
    statut?: boolean
    typePayRun?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bulletins?: boolean | PayRun$bulletinsArgs<ExtArgs>
    _count?: boolean | PayRunCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payRun"]>



  export type PayRunSelectScalar = {
    id?: boolean
    periodeDebut?: boolean
    periodeFin?: boolean
    statut?: boolean
    typePayRun?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PayRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "periodeDebut" | "periodeFin" | "statut" | "typePayRun" | "createdAt" | "updatedAt", ExtArgs["result"]["payRun"]>
  export type PayRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bulletins?: boolean | PayRun$bulletinsArgs<ExtArgs>
    _count?: boolean | PayRunCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PayRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PayRun"
    objects: {
      bulletins: Prisma.$BulletinsSalairePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      periodeDebut: Date
      periodeFin: Date
      statut: $Enums.PayRunStatut
      typePayRun: $Enums.TypePayRun
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payRun"]>
    composites: {}
  }

  type PayRunGetPayload<S extends boolean | null | undefined | PayRunDefaultArgs> = $Result.GetResult<Prisma.$PayRunPayload, S>

  type PayRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayRunCountAggregateInputType | true
    }

  export interface PayRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PayRun'], meta: { name: 'PayRun' } }
    /**
     * Find zero or one PayRun that matches the filter.
     * @param {PayRunFindUniqueArgs} args - Arguments to find a PayRun
     * @example
     * // Get one PayRun
     * const payRun = await prisma.payRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayRunFindUniqueArgs>(args: SelectSubset<T, PayRunFindUniqueArgs<ExtArgs>>): Prisma__PayRunClient<$Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PayRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayRunFindUniqueOrThrowArgs} args - Arguments to find a PayRun
     * @example
     * // Get one PayRun
     * const payRun = await prisma.payRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayRunFindUniqueOrThrowArgs>(args: SelectSubset<T, PayRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayRunClient<$Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayRunFindFirstArgs} args - Arguments to find a PayRun
     * @example
     * // Get one PayRun
     * const payRun = await prisma.payRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayRunFindFirstArgs>(args?: SelectSubset<T, PayRunFindFirstArgs<ExtArgs>>): Prisma__PayRunClient<$Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayRunFindFirstOrThrowArgs} args - Arguments to find a PayRun
     * @example
     * // Get one PayRun
     * const payRun = await prisma.payRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayRunFindFirstOrThrowArgs>(args?: SelectSubset<T, PayRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayRunClient<$Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PayRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayRuns
     * const payRuns = await prisma.payRun.findMany()
     * 
     * // Get first 10 PayRuns
     * const payRuns = await prisma.payRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payRunWithIdOnly = await prisma.payRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayRunFindManyArgs>(args?: SelectSubset<T, PayRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PayRun.
     * @param {PayRunCreateArgs} args - Arguments to create a PayRun.
     * @example
     * // Create one PayRun
     * const PayRun = await prisma.payRun.create({
     *   data: {
     *     // ... data to create a PayRun
     *   }
     * })
     * 
     */
    create<T extends PayRunCreateArgs>(args: SelectSubset<T, PayRunCreateArgs<ExtArgs>>): Prisma__PayRunClient<$Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PayRuns.
     * @param {PayRunCreateManyArgs} args - Arguments to create many PayRuns.
     * @example
     * // Create many PayRuns
     * const payRun = await prisma.payRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayRunCreateManyArgs>(args?: SelectSubset<T, PayRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PayRun.
     * @param {PayRunDeleteArgs} args - Arguments to delete one PayRun.
     * @example
     * // Delete one PayRun
     * const PayRun = await prisma.payRun.delete({
     *   where: {
     *     // ... filter to delete one PayRun
     *   }
     * })
     * 
     */
    delete<T extends PayRunDeleteArgs>(args: SelectSubset<T, PayRunDeleteArgs<ExtArgs>>): Prisma__PayRunClient<$Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PayRun.
     * @param {PayRunUpdateArgs} args - Arguments to update one PayRun.
     * @example
     * // Update one PayRun
     * const payRun = await prisma.payRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayRunUpdateArgs>(args: SelectSubset<T, PayRunUpdateArgs<ExtArgs>>): Prisma__PayRunClient<$Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PayRuns.
     * @param {PayRunDeleteManyArgs} args - Arguments to filter PayRuns to delete.
     * @example
     * // Delete a few PayRuns
     * const { count } = await prisma.payRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayRunDeleteManyArgs>(args?: SelectSubset<T, PayRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayRuns
     * const payRun = await prisma.payRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayRunUpdateManyArgs>(args: SelectSubset<T, PayRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PayRun.
     * @param {PayRunUpsertArgs} args - Arguments to update or create a PayRun.
     * @example
     * // Update or create a PayRun
     * const payRun = await prisma.payRun.upsert({
     *   create: {
     *     // ... data to create a PayRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayRun we want to update
     *   }
     * })
     */
    upsert<T extends PayRunUpsertArgs>(args: SelectSubset<T, PayRunUpsertArgs<ExtArgs>>): Prisma__PayRunClient<$Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PayRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayRunCountArgs} args - Arguments to filter PayRuns to count.
     * @example
     * // Count the number of PayRuns
     * const count = await prisma.payRun.count({
     *   where: {
     *     // ... the filter for the PayRuns we want to count
     *   }
     * })
    **/
    count<T extends PayRunCountArgs>(
      args?: Subset<T, PayRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PayRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PayRunAggregateArgs>(args: Subset<T, PayRunAggregateArgs>): Prisma.PrismaPromise<GetPayRunAggregateType<T>>

    /**
     * Group by PayRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayRunGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PayRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayRunGroupByArgs['orderBy'] }
        : { orderBy?: PayRunGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PayRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PayRun model
   */
  readonly fields: PayRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PayRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bulletins<T extends PayRun$bulletinsArgs<ExtArgs> = {}>(args?: Subset<T, PayRun$bulletinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulletinsSalairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PayRun model
   */
  interface PayRunFieldRefs {
    readonly id: FieldRef<"PayRun", 'Int'>
    readonly periodeDebut: FieldRef<"PayRun", 'DateTime'>
    readonly periodeFin: FieldRef<"PayRun", 'DateTime'>
    readonly statut: FieldRef<"PayRun", 'PayRunStatut'>
    readonly typePayRun: FieldRef<"PayRun", 'TypePayRun'>
    readonly createdAt: FieldRef<"PayRun", 'DateTime'>
    readonly updatedAt: FieldRef<"PayRun", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PayRun findUnique
   */
  export type PayRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRun
     */
    select?: PayRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRun
     */
    omit?: PayRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRunInclude<ExtArgs> | null
    /**
     * Filter, which PayRun to fetch.
     */
    where: PayRunWhereUniqueInput
  }

  /**
   * PayRun findUniqueOrThrow
   */
  export type PayRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRun
     */
    select?: PayRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRun
     */
    omit?: PayRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRunInclude<ExtArgs> | null
    /**
     * Filter, which PayRun to fetch.
     */
    where: PayRunWhereUniqueInput
  }

  /**
   * PayRun findFirst
   */
  export type PayRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRun
     */
    select?: PayRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRun
     */
    omit?: PayRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRunInclude<ExtArgs> | null
    /**
     * Filter, which PayRun to fetch.
     */
    where?: PayRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayRuns to fetch.
     */
    orderBy?: PayRunOrderByWithRelationInput | PayRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayRuns.
     */
    cursor?: PayRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayRuns.
     */
    distinct?: PayRunScalarFieldEnum | PayRunScalarFieldEnum[]
  }

  /**
   * PayRun findFirstOrThrow
   */
  export type PayRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRun
     */
    select?: PayRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRun
     */
    omit?: PayRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRunInclude<ExtArgs> | null
    /**
     * Filter, which PayRun to fetch.
     */
    where?: PayRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayRuns to fetch.
     */
    orderBy?: PayRunOrderByWithRelationInput | PayRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayRuns.
     */
    cursor?: PayRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayRuns.
     */
    distinct?: PayRunScalarFieldEnum | PayRunScalarFieldEnum[]
  }

  /**
   * PayRun findMany
   */
  export type PayRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRun
     */
    select?: PayRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRun
     */
    omit?: PayRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRunInclude<ExtArgs> | null
    /**
     * Filter, which PayRuns to fetch.
     */
    where?: PayRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayRuns to fetch.
     */
    orderBy?: PayRunOrderByWithRelationInput | PayRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PayRuns.
     */
    cursor?: PayRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayRuns.
     */
    skip?: number
    distinct?: PayRunScalarFieldEnum | PayRunScalarFieldEnum[]
  }

  /**
   * PayRun create
   */
  export type PayRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRun
     */
    select?: PayRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRun
     */
    omit?: PayRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRunInclude<ExtArgs> | null
    /**
     * The data needed to create a PayRun.
     */
    data: XOR<PayRunCreateInput, PayRunUncheckedCreateInput>
  }

  /**
   * PayRun createMany
   */
  export type PayRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PayRuns.
     */
    data: PayRunCreateManyInput | PayRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PayRun update
   */
  export type PayRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRun
     */
    select?: PayRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRun
     */
    omit?: PayRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRunInclude<ExtArgs> | null
    /**
     * The data needed to update a PayRun.
     */
    data: XOR<PayRunUpdateInput, PayRunUncheckedUpdateInput>
    /**
     * Choose, which PayRun to update.
     */
    where: PayRunWhereUniqueInput
  }

  /**
   * PayRun updateMany
   */
  export type PayRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PayRuns.
     */
    data: XOR<PayRunUpdateManyMutationInput, PayRunUncheckedUpdateManyInput>
    /**
     * Filter which PayRuns to update
     */
    where?: PayRunWhereInput
    /**
     * Limit how many PayRuns to update.
     */
    limit?: number
  }

  /**
   * PayRun upsert
   */
  export type PayRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRun
     */
    select?: PayRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRun
     */
    omit?: PayRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRunInclude<ExtArgs> | null
    /**
     * The filter to search for the PayRun to update in case it exists.
     */
    where: PayRunWhereUniqueInput
    /**
     * In case the PayRun found by the `where` argument doesn't exist, create a new PayRun with this data.
     */
    create: XOR<PayRunCreateInput, PayRunUncheckedCreateInput>
    /**
     * In case the PayRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayRunUpdateInput, PayRunUncheckedUpdateInput>
  }

  /**
   * PayRun delete
   */
  export type PayRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRun
     */
    select?: PayRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRun
     */
    omit?: PayRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRunInclude<ExtArgs> | null
    /**
     * Filter which PayRun to delete.
     */
    where: PayRunWhereUniqueInput
  }

  /**
   * PayRun deleteMany
   */
  export type PayRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayRuns to delete
     */
    where?: PayRunWhereInput
    /**
     * Limit how many PayRuns to delete.
     */
    limit?: number
  }

  /**
   * PayRun.bulletins
   */
  export type PayRun$bulletinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinsSalaire
     */
    select?: BulletinsSalaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletinsSalaire
     */
    omit?: BulletinsSalaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinsSalaireInclude<ExtArgs> | null
    where?: BulletinsSalaireWhereInput
    orderBy?: BulletinsSalaireOrderByWithRelationInput | BulletinsSalaireOrderByWithRelationInput[]
    cursor?: BulletinsSalaireWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BulletinsSalaireScalarFieldEnum | BulletinsSalaireScalarFieldEnum[]
  }

  /**
   * PayRun without action
   */
  export type PayRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRun
     */
    select?: PayRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRun
     */
    omit?: PayRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRunInclude<ExtArgs> | null
  }


  /**
   * Model Contrat
   */

  export type AggregateContrat = {
    _count: ContratCountAggregateOutputType | null
    _avg: ContratAvgAggregateOutputType | null
    _sum: ContratSumAggregateOutputType | null
    _min: ContratMinAggregateOutputType | null
    _max: ContratMaxAggregateOutputType | null
  }

  export type ContratAvgAggregateOutputType = {
    id: number | null
    employeId: number | null
    salaireFixe: Decimal | null
    tauxJournalier: Decimal | null
    tauxHoraire: Decimal | null
  }

  export type ContratSumAggregateOutputType = {
    id: number | null
    employeId: number | null
    salaireFixe: Decimal | null
    tauxJournalier: Decimal | null
    tauxHoraire: Decimal | null
  }

  export type ContratMinAggregateOutputType = {
    id: number | null
    employeId: number | null
    type: $Enums.TypeContrat | null
    salaireFixe: Decimal | null
    tauxJournalier: Decimal | null
    tauxHoraire: Decimal | null
    date_embauche: Date | null
    date_arret: Date | null
  }

  export type ContratMaxAggregateOutputType = {
    id: number | null
    employeId: number | null
    type: $Enums.TypeContrat | null
    salaireFixe: Decimal | null
    tauxJournalier: Decimal | null
    tauxHoraire: Decimal | null
    date_embauche: Date | null
    date_arret: Date | null
  }

  export type ContratCountAggregateOutputType = {
    id: number
    employeId: number
    type: number
    salaireFixe: number
    tauxJournalier: number
    tauxHoraire: number
    date_embauche: number
    date_arret: number
    _all: number
  }


  export type ContratAvgAggregateInputType = {
    id?: true
    employeId?: true
    salaireFixe?: true
    tauxJournalier?: true
    tauxHoraire?: true
  }

  export type ContratSumAggregateInputType = {
    id?: true
    employeId?: true
    salaireFixe?: true
    tauxJournalier?: true
    tauxHoraire?: true
  }

  export type ContratMinAggregateInputType = {
    id?: true
    employeId?: true
    type?: true
    salaireFixe?: true
    tauxJournalier?: true
    tauxHoraire?: true
    date_embauche?: true
    date_arret?: true
  }

  export type ContratMaxAggregateInputType = {
    id?: true
    employeId?: true
    type?: true
    salaireFixe?: true
    tauxJournalier?: true
    tauxHoraire?: true
    date_embauche?: true
    date_arret?: true
  }

  export type ContratCountAggregateInputType = {
    id?: true
    employeId?: true
    type?: true
    salaireFixe?: true
    tauxJournalier?: true
    tauxHoraire?: true
    date_embauche?: true
    date_arret?: true
    _all?: true
  }

  export type ContratAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contrat to aggregate.
     */
    where?: ContratWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contrats to fetch.
     */
    orderBy?: ContratOrderByWithRelationInput | ContratOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContratWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contrats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contrats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contrats
    **/
    _count?: true | ContratCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContratAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContratSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContratMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContratMaxAggregateInputType
  }

  export type GetContratAggregateType<T extends ContratAggregateArgs> = {
        [P in keyof T & keyof AggregateContrat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContrat[P]>
      : GetScalarType<T[P], AggregateContrat[P]>
  }




  export type ContratGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContratWhereInput
    orderBy?: ContratOrderByWithAggregationInput | ContratOrderByWithAggregationInput[]
    by: ContratScalarFieldEnum[] | ContratScalarFieldEnum
    having?: ContratScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContratCountAggregateInputType | true
    _avg?: ContratAvgAggregateInputType
    _sum?: ContratSumAggregateInputType
    _min?: ContratMinAggregateInputType
    _max?: ContratMaxAggregateInputType
  }

  export type ContratGroupByOutputType = {
    id: number
    employeId: number
    type: $Enums.TypeContrat
    salaireFixe: Decimal | null
    tauxJournalier: Decimal | null
    tauxHoraire: Decimal | null
    date_embauche: Date
    date_arret: Date | null
    _count: ContratCountAggregateOutputType | null
    _avg: ContratAvgAggregateOutputType | null
    _sum: ContratSumAggregateOutputType | null
    _min: ContratMinAggregateOutputType | null
    _max: ContratMaxAggregateOutputType | null
  }

  type GetContratGroupByPayload<T extends ContratGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContratGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContratGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContratGroupByOutputType[P]>
            : GetScalarType<T[P], ContratGroupByOutputType[P]>
        }
      >
    >


  export type ContratSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeId?: boolean
    type?: boolean
    salaireFixe?: boolean
    tauxJournalier?: boolean
    tauxHoraire?: boolean
    date_embauche?: boolean
    date_arret?: boolean
    employe?: boolean | EmployesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contrat"]>



  export type ContratSelectScalar = {
    id?: boolean
    employeId?: boolean
    type?: boolean
    salaireFixe?: boolean
    tauxJournalier?: boolean
    tauxHoraire?: boolean
    date_embauche?: boolean
    date_arret?: boolean
  }

  export type ContratOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeId" | "type" | "salaireFixe" | "tauxJournalier" | "tauxHoraire" | "date_embauche" | "date_arret", ExtArgs["result"]["contrat"]>
  export type ContratInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employe?: boolean | EmployesDefaultArgs<ExtArgs>
  }

  export type $ContratPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contrat"
    objects: {
      employe: Prisma.$EmployesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      employeId: number
      type: $Enums.TypeContrat
      salaireFixe: Prisma.Decimal | null
      tauxJournalier: Prisma.Decimal | null
      tauxHoraire: Prisma.Decimal | null
      date_embauche: Date
      date_arret: Date | null
    }, ExtArgs["result"]["contrat"]>
    composites: {}
  }

  type ContratGetPayload<S extends boolean | null | undefined | ContratDefaultArgs> = $Result.GetResult<Prisma.$ContratPayload, S>

  type ContratCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContratFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContratCountAggregateInputType | true
    }

  export interface ContratDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contrat'], meta: { name: 'Contrat' } }
    /**
     * Find zero or one Contrat that matches the filter.
     * @param {ContratFindUniqueArgs} args - Arguments to find a Contrat
     * @example
     * // Get one Contrat
     * const contrat = await prisma.contrat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContratFindUniqueArgs>(args: SelectSubset<T, ContratFindUniqueArgs<ExtArgs>>): Prisma__ContratClient<$Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contrat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContratFindUniqueOrThrowArgs} args - Arguments to find a Contrat
     * @example
     * // Get one Contrat
     * const contrat = await prisma.contrat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContratFindUniqueOrThrowArgs>(args: SelectSubset<T, ContratFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContratClient<$Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contrat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratFindFirstArgs} args - Arguments to find a Contrat
     * @example
     * // Get one Contrat
     * const contrat = await prisma.contrat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContratFindFirstArgs>(args?: SelectSubset<T, ContratFindFirstArgs<ExtArgs>>): Prisma__ContratClient<$Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contrat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratFindFirstOrThrowArgs} args - Arguments to find a Contrat
     * @example
     * // Get one Contrat
     * const contrat = await prisma.contrat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContratFindFirstOrThrowArgs>(args?: SelectSubset<T, ContratFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContratClient<$Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contrats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contrats
     * const contrats = await prisma.contrat.findMany()
     * 
     * // Get first 10 Contrats
     * const contrats = await prisma.contrat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contratWithIdOnly = await prisma.contrat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContratFindManyArgs>(args?: SelectSubset<T, ContratFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contrat.
     * @param {ContratCreateArgs} args - Arguments to create a Contrat.
     * @example
     * // Create one Contrat
     * const Contrat = await prisma.contrat.create({
     *   data: {
     *     // ... data to create a Contrat
     *   }
     * })
     * 
     */
    create<T extends ContratCreateArgs>(args: SelectSubset<T, ContratCreateArgs<ExtArgs>>): Prisma__ContratClient<$Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contrats.
     * @param {ContratCreateManyArgs} args - Arguments to create many Contrats.
     * @example
     * // Create many Contrats
     * const contrat = await prisma.contrat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContratCreateManyArgs>(args?: SelectSubset<T, ContratCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contrat.
     * @param {ContratDeleteArgs} args - Arguments to delete one Contrat.
     * @example
     * // Delete one Contrat
     * const Contrat = await prisma.contrat.delete({
     *   where: {
     *     // ... filter to delete one Contrat
     *   }
     * })
     * 
     */
    delete<T extends ContratDeleteArgs>(args: SelectSubset<T, ContratDeleteArgs<ExtArgs>>): Prisma__ContratClient<$Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contrat.
     * @param {ContratUpdateArgs} args - Arguments to update one Contrat.
     * @example
     * // Update one Contrat
     * const contrat = await prisma.contrat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContratUpdateArgs>(args: SelectSubset<T, ContratUpdateArgs<ExtArgs>>): Prisma__ContratClient<$Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contrats.
     * @param {ContratDeleteManyArgs} args - Arguments to filter Contrats to delete.
     * @example
     * // Delete a few Contrats
     * const { count } = await prisma.contrat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContratDeleteManyArgs>(args?: SelectSubset<T, ContratDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contrats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contrats
     * const contrat = await prisma.contrat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContratUpdateManyArgs>(args: SelectSubset<T, ContratUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contrat.
     * @param {ContratUpsertArgs} args - Arguments to update or create a Contrat.
     * @example
     * // Update or create a Contrat
     * const contrat = await prisma.contrat.upsert({
     *   create: {
     *     // ... data to create a Contrat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contrat we want to update
     *   }
     * })
     */
    upsert<T extends ContratUpsertArgs>(args: SelectSubset<T, ContratUpsertArgs<ExtArgs>>): Prisma__ContratClient<$Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contrats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratCountArgs} args - Arguments to filter Contrats to count.
     * @example
     * // Count the number of Contrats
     * const count = await prisma.contrat.count({
     *   where: {
     *     // ... the filter for the Contrats we want to count
     *   }
     * })
    **/
    count<T extends ContratCountArgs>(
      args?: Subset<T, ContratCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContratCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contrat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContratAggregateArgs>(args: Subset<T, ContratAggregateArgs>): Prisma.PrismaPromise<GetContratAggregateType<T>>

    /**
     * Group by Contrat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContratGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContratGroupByArgs['orderBy'] }
        : { orderBy?: ContratGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContratGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContratGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contrat model
   */
  readonly fields: ContratFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contrat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContratClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employe<T extends EmployesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployesDefaultArgs<ExtArgs>>): Prisma__EmployesClient<$Result.GetResult<Prisma.$EmployesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contrat model
   */
  interface ContratFieldRefs {
    readonly id: FieldRef<"Contrat", 'Int'>
    readonly employeId: FieldRef<"Contrat", 'Int'>
    readonly type: FieldRef<"Contrat", 'TypeContrat'>
    readonly salaireFixe: FieldRef<"Contrat", 'Decimal'>
    readonly tauxJournalier: FieldRef<"Contrat", 'Decimal'>
    readonly tauxHoraire: FieldRef<"Contrat", 'Decimal'>
    readonly date_embauche: FieldRef<"Contrat", 'DateTime'>
    readonly date_arret: FieldRef<"Contrat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contrat findUnique
   */
  export type ContratFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrat
     */
    select?: ContratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrat
     */
    omit?: ContratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratInclude<ExtArgs> | null
    /**
     * Filter, which Contrat to fetch.
     */
    where: ContratWhereUniqueInput
  }

  /**
   * Contrat findUniqueOrThrow
   */
  export type ContratFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrat
     */
    select?: ContratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrat
     */
    omit?: ContratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratInclude<ExtArgs> | null
    /**
     * Filter, which Contrat to fetch.
     */
    where: ContratWhereUniqueInput
  }

  /**
   * Contrat findFirst
   */
  export type ContratFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrat
     */
    select?: ContratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrat
     */
    omit?: ContratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratInclude<ExtArgs> | null
    /**
     * Filter, which Contrat to fetch.
     */
    where?: ContratWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contrats to fetch.
     */
    orderBy?: ContratOrderByWithRelationInput | ContratOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contrats.
     */
    cursor?: ContratWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contrats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contrats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contrats.
     */
    distinct?: ContratScalarFieldEnum | ContratScalarFieldEnum[]
  }

  /**
   * Contrat findFirstOrThrow
   */
  export type ContratFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrat
     */
    select?: ContratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrat
     */
    omit?: ContratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratInclude<ExtArgs> | null
    /**
     * Filter, which Contrat to fetch.
     */
    where?: ContratWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contrats to fetch.
     */
    orderBy?: ContratOrderByWithRelationInput | ContratOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contrats.
     */
    cursor?: ContratWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contrats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contrats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contrats.
     */
    distinct?: ContratScalarFieldEnum | ContratScalarFieldEnum[]
  }

  /**
   * Contrat findMany
   */
  export type ContratFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrat
     */
    select?: ContratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrat
     */
    omit?: ContratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratInclude<ExtArgs> | null
    /**
     * Filter, which Contrats to fetch.
     */
    where?: ContratWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contrats to fetch.
     */
    orderBy?: ContratOrderByWithRelationInput | ContratOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contrats.
     */
    cursor?: ContratWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contrats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contrats.
     */
    skip?: number
    distinct?: ContratScalarFieldEnum | ContratScalarFieldEnum[]
  }

  /**
   * Contrat create
   */
  export type ContratCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrat
     */
    select?: ContratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrat
     */
    omit?: ContratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratInclude<ExtArgs> | null
    /**
     * The data needed to create a Contrat.
     */
    data: XOR<ContratCreateInput, ContratUncheckedCreateInput>
  }

  /**
   * Contrat createMany
   */
  export type ContratCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contrats.
     */
    data: ContratCreateManyInput | ContratCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contrat update
   */
  export type ContratUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrat
     */
    select?: ContratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrat
     */
    omit?: ContratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratInclude<ExtArgs> | null
    /**
     * The data needed to update a Contrat.
     */
    data: XOR<ContratUpdateInput, ContratUncheckedUpdateInput>
    /**
     * Choose, which Contrat to update.
     */
    where: ContratWhereUniqueInput
  }

  /**
   * Contrat updateMany
   */
  export type ContratUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contrats.
     */
    data: XOR<ContratUpdateManyMutationInput, ContratUncheckedUpdateManyInput>
    /**
     * Filter which Contrats to update
     */
    where?: ContratWhereInput
    /**
     * Limit how many Contrats to update.
     */
    limit?: number
  }

  /**
   * Contrat upsert
   */
  export type ContratUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrat
     */
    select?: ContratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrat
     */
    omit?: ContratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratInclude<ExtArgs> | null
    /**
     * The filter to search for the Contrat to update in case it exists.
     */
    where: ContratWhereUniqueInput
    /**
     * In case the Contrat found by the `where` argument doesn't exist, create a new Contrat with this data.
     */
    create: XOR<ContratCreateInput, ContratUncheckedCreateInput>
    /**
     * In case the Contrat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContratUpdateInput, ContratUncheckedUpdateInput>
  }

  /**
   * Contrat delete
   */
  export type ContratDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrat
     */
    select?: ContratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrat
     */
    omit?: ContratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratInclude<ExtArgs> | null
    /**
     * Filter which Contrat to delete.
     */
    where: ContratWhereUniqueInput
  }

  /**
   * Contrat deleteMany
   */
  export type ContratDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contrats to delete
     */
    where?: ContratWhereInput
    /**
     * Limit how many Contrats to delete.
     */
    limit?: number
  }

  /**
   * Contrat without action
   */
  export type ContratDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrat
     */
    select?: ContratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrat
     */
    omit?: ContratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratInclude<ExtArgs> | null
  }


  /**
   * Model Pointages
   */

  export type AggregatePointages = {
    _count: PointagesCountAggregateOutputType | null
    _avg: PointagesAvgAggregateOutputType | null
    _sum: PointagesSumAggregateOutputType | null
    _min: PointagesMinAggregateOutputType | null
    _max: PointagesMaxAggregateOutputType | null
  }

  export type PointagesAvgAggregateOutputType = {
    id: number | null
    employeId: number | null
  }

  export type PointagesSumAggregateOutputType = {
    id: number | null
    employeId: number | null
  }

  export type PointagesMinAggregateOutputType = {
    id: number | null
    employeId: number | null
    date: Date | null
    entree: Date | null
    sortie: Date | null
  }

  export type PointagesMaxAggregateOutputType = {
    id: number | null
    employeId: number | null
    date: Date | null
    entree: Date | null
    sortie: Date | null
  }

  export type PointagesCountAggregateOutputType = {
    id: number
    employeId: number
    date: number
    entree: number
    sortie: number
    _all: number
  }


  export type PointagesAvgAggregateInputType = {
    id?: true
    employeId?: true
  }

  export type PointagesSumAggregateInputType = {
    id?: true
    employeId?: true
  }

  export type PointagesMinAggregateInputType = {
    id?: true
    employeId?: true
    date?: true
    entree?: true
    sortie?: true
  }

  export type PointagesMaxAggregateInputType = {
    id?: true
    employeId?: true
    date?: true
    entree?: true
    sortie?: true
  }

  export type PointagesCountAggregateInputType = {
    id?: true
    employeId?: true
    date?: true
    entree?: true
    sortie?: true
    _all?: true
  }

  export type PointagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pointages to aggregate.
     */
    where?: PointagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pointages to fetch.
     */
    orderBy?: PointagesOrderByWithRelationInput | PointagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PointagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pointages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pointages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pointages
    **/
    _count?: true | PointagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PointagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PointagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PointagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PointagesMaxAggregateInputType
  }

  export type GetPointagesAggregateType<T extends PointagesAggregateArgs> = {
        [P in keyof T & keyof AggregatePointages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePointages[P]>
      : GetScalarType<T[P], AggregatePointages[P]>
  }




  export type PointagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointagesWhereInput
    orderBy?: PointagesOrderByWithAggregationInput | PointagesOrderByWithAggregationInput[]
    by: PointagesScalarFieldEnum[] | PointagesScalarFieldEnum
    having?: PointagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PointagesCountAggregateInputType | true
    _avg?: PointagesAvgAggregateInputType
    _sum?: PointagesSumAggregateInputType
    _min?: PointagesMinAggregateInputType
    _max?: PointagesMaxAggregateInputType
  }

  export type PointagesGroupByOutputType = {
    id: number
    employeId: number
    date: Date
    entree: Date
    sortie: Date
    _count: PointagesCountAggregateOutputType | null
    _avg: PointagesAvgAggregateOutputType | null
    _sum: PointagesSumAggregateOutputType | null
    _min: PointagesMinAggregateOutputType | null
    _max: PointagesMaxAggregateOutputType | null
  }

  type GetPointagesGroupByPayload<T extends PointagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PointagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PointagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PointagesGroupByOutputType[P]>
            : GetScalarType<T[P], PointagesGroupByOutputType[P]>
        }
      >
    >


  export type PointagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeId?: boolean
    date?: boolean
    entree?: boolean
    sortie?: boolean
    employe?: boolean | EmployesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pointages"]>



  export type PointagesSelectScalar = {
    id?: boolean
    employeId?: boolean
    date?: boolean
    entree?: boolean
    sortie?: boolean
  }

  export type PointagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeId" | "date" | "entree" | "sortie", ExtArgs["result"]["pointages"]>
  export type PointagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employe?: boolean | EmployesDefaultArgs<ExtArgs>
  }

  export type $PointagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pointages"
    objects: {
      employe: Prisma.$EmployesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      employeId: number
      date: Date
      entree: Date
      sortie: Date
    }, ExtArgs["result"]["pointages"]>
    composites: {}
  }

  type PointagesGetPayload<S extends boolean | null | undefined | PointagesDefaultArgs> = $Result.GetResult<Prisma.$PointagesPayload, S>

  type PointagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PointagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PointagesCountAggregateInputType | true
    }

  export interface PointagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pointages'], meta: { name: 'Pointages' } }
    /**
     * Find zero or one Pointages that matches the filter.
     * @param {PointagesFindUniqueArgs} args - Arguments to find a Pointages
     * @example
     * // Get one Pointages
     * const pointages = await prisma.pointages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PointagesFindUniqueArgs>(args: SelectSubset<T, PointagesFindUniqueArgs<ExtArgs>>): Prisma__PointagesClient<$Result.GetResult<Prisma.$PointagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pointages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PointagesFindUniqueOrThrowArgs} args - Arguments to find a Pointages
     * @example
     * // Get one Pointages
     * const pointages = await prisma.pointages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PointagesFindUniqueOrThrowArgs>(args: SelectSubset<T, PointagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PointagesClient<$Result.GetResult<Prisma.$PointagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pointages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointagesFindFirstArgs} args - Arguments to find a Pointages
     * @example
     * // Get one Pointages
     * const pointages = await prisma.pointages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PointagesFindFirstArgs>(args?: SelectSubset<T, PointagesFindFirstArgs<ExtArgs>>): Prisma__PointagesClient<$Result.GetResult<Prisma.$PointagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pointages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointagesFindFirstOrThrowArgs} args - Arguments to find a Pointages
     * @example
     * // Get one Pointages
     * const pointages = await prisma.pointages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PointagesFindFirstOrThrowArgs>(args?: SelectSubset<T, PointagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PointagesClient<$Result.GetResult<Prisma.$PointagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pointages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pointages
     * const pointages = await prisma.pointages.findMany()
     * 
     * // Get first 10 Pointages
     * const pointages = await prisma.pointages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pointagesWithIdOnly = await prisma.pointages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PointagesFindManyArgs>(args?: SelectSubset<T, PointagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pointages.
     * @param {PointagesCreateArgs} args - Arguments to create a Pointages.
     * @example
     * // Create one Pointages
     * const Pointages = await prisma.pointages.create({
     *   data: {
     *     // ... data to create a Pointages
     *   }
     * })
     * 
     */
    create<T extends PointagesCreateArgs>(args: SelectSubset<T, PointagesCreateArgs<ExtArgs>>): Prisma__PointagesClient<$Result.GetResult<Prisma.$PointagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pointages.
     * @param {PointagesCreateManyArgs} args - Arguments to create many Pointages.
     * @example
     * // Create many Pointages
     * const pointages = await prisma.pointages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PointagesCreateManyArgs>(args?: SelectSubset<T, PointagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pointages.
     * @param {PointagesDeleteArgs} args - Arguments to delete one Pointages.
     * @example
     * // Delete one Pointages
     * const Pointages = await prisma.pointages.delete({
     *   where: {
     *     // ... filter to delete one Pointages
     *   }
     * })
     * 
     */
    delete<T extends PointagesDeleteArgs>(args: SelectSubset<T, PointagesDeleteArgs<ExtArgs>>): Prisma__PointagesClient<$Result.GetResult<Prisma.$PointagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pointages.
     * @param {PointagesUpdateArgs} args - Arguments to update one Pointages.
     * @example
     * // Update one Pointages
     * const pointages = await prisma.pointages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PointagesUpdateArgs>(args: SelectSubset<T, PointagesUpdateArgs<ExtArgs>>): Prisma__PointagesClient<$Result.GetResult<Prisma.$PointagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pointages.
     * @param {PointagesDeleteManyArgs} args - Arguments to filter Pointages to delete.
     * @example
     * // Delete a few Pointages
     * const { count } = await prisma.pointages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PointagesDeleteManyArgs>(args?: SelectSubset<T, PointagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pointages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pointages
     * const pointages = await prisma.pointages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PointagesUpdateManyArgs>(args: SelectSubset<T, PointagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pointages.
     * @param {PointagesUpsertArgs} args - Arguments to update or create a Pointages.
     * @example
     * // Update or create a Pointages
     * const pointages = await prisma.pointages.upsert({
     *   create: {
     *     // ... data to create a Pointages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pointages we want to update
     *   }
     * })
     */
    upsert<T extends PointagesUpsertArgs>(args: SelectSubset<T, PointagesUpsertArgs<ExtArgs>>): Prisma__PointagesClient<$Result.GetResult<Prisma.$PointagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pointages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointagesCountArgs} args - Arguments to filter Pointages to count.
     * @example
     * // Count the number of Pointages
     * const count = await prisma.pointages.count({
     *   where: {
     *     // ... the filter for the Pointages we want to count
     *   }
     * })
    **/
    count<T extends PointagesCountArgs>(
      args?: Subset<T, PointagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PointagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pointages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PointagesAggregateArgs>(args: Subset<T, PointagesAggregateArgs>): Prisma.PrismaPromise<GetPointagesAggregateType<T>>

    /**
     * Group by Pointages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PointagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PointagesGroupByArgs['orderBy'] }
        : { orderBy?: PointagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PointagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pointages model
   */
  readonly fields: PointagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pointages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PointagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employe<T extends EmployesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployesDefaultArgs<ExtArgs>>): Prisma__EmployesClient<$Result.GetResult<Prisma.$EmployesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pointages model
   */
  interface PointagesFieldRefs {
    readonly id: FieldRef<"Pointages", 'Int'>
    readonly employeId: FieldRef<"Pointages", 'Int'>
    readonly date: FieldRef<"Pointages", 'DateTime'>
    readonly entree: FieldRef<"Pointages", 'DateTime'>
    readonly sortie: FieldRef<"Pointages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pointages findUnique
   */
  export type PointagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pointages
     */
    select?: PointagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pointages
     */
    omit?: PointagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointagesInclude<ExtArgs> | null
    /**
     * Filter, which Pointages to fetch.
     */
    where: PointagesWhereUniqueInput
  }

  /**
   * Pointages findUniqueOrThrow
   */
  export type PointagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pointages
     */
    select?: PointagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pointages
     */
    omit?: PointagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointagesInclude<ExtArgs> | null
    /**
     * Filter, which Pointages to fetch.
     */
    where: PointagesWhereUniqueInput
  }

  /**
   * Pointages findFirst
   */
  export type PointagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pointages
     */
    select?: PointagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pointages
     */
    omit?: PointagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointagesInclude<ExtArgs> | null
    /**
     * Filter, which Pointages to fetch.
     */
    where?: PointagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pointages to fetch.
     */
    orderBy?: PointagesOrderByWithRelationInput | PointagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pointages.
     */
    cursor?: PointagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pointages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pointages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pointages.
     */
    distinct?: PointagesScalarFieldEnum | PointagesScalarFieldEnum[]
  }

  /**
   * Pointages findFirstOrThrow
   */
  export type PointagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pointages
     */
    select?: PointagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pointages
     */
    omit?: PointagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointagesInclude<ExtArgs> | null
    /**
     * Filter, which Pointages to fetch.
     */
    where?: PointagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pointages to fetch.
     */
    orderBy?: PointagesOrderByWithRelationInput | PointagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pointages.
     */
    cursor?: PointagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pointages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pointages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pointages.
     */
    distinct?: PointagesScalarFieldEnum | PointagesScalarFieldEnum[]
  }

  /**
   * Pointages findMany
   */
  export type PointagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pointages
     */
    select?: PointagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pointages
     */
    omit?: PointagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointagesInclude<ExtArgs> | null
    /**
     * Filter, which Pointages to fetch.
     */
    where?: PointagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pointages to fetch.
     */
    orderBy?: PointagesOrderByWithRelationInput | PointagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pointages.
     */
    cursor?: PointagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pointages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pointages.
     */
    skip?: number
    distinct?: PointagesScalarFieldEnum | PointagesScalarFieldEnum[]
  }

  /**
   * Pointages create
   */
  export type PointagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pointages
     */
    select?: PointagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pointages
     */
    omit?: PointagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointagesInclude<ExtArgs> | null
    /**
     * The data needed to create a Pointages.
     */
    data: XOR<PointagesCreateInput, PointagesUncheckedCreateInput>
  }

  /**
   * Pointages createMany
   */
  export type PointagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pointages.
     */
    data: PointagesCreateManyInput | PointagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pointages update
   */
  export type PointagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pointages
     */
    select?: PointagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pointages
     */
    omit?: PointagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointagesInclude<ExtArgs> | null
    /**
     * The data needed to update a Pointages.
     */
    data: XOR<PointagesUpdateInput, PointagesUncheckedUpdateInput>
    /**
     * Choose, which Pointages to update.
     */
    where: PointagesWhereUniqueInput
  }

  /**
   * Pointages updateMany
   */
  export type PointagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pointages.
     */
    data: XOR<PointagesUpdateManyMutationInput, PointagesUncheckedUpdateManyInput>
    /**
     * Filter which Pointages to update
     */
    where?: PointagesWhereInput
    /**
     * Limit how many Pointages to update.
     */
    limit?: number
  }

  /**
   * Pointages upsert
   */
  export type PointagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pointages
     */
    select?: PointagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pointages
     */
    omit?: PointagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointagesInclude<ExtArgs> | null
    /**
     * The filter to search for the Pointages to update in case it exists.
     */
    where: PointagesWhereUniqueInput
    /**
     * In case the Pointages found by the `where` argument doesn't exist, create a new Pointages with this data.
     */
    create: XOR<PointagesCreateInput, PointagesUncheckedCreateInput>
    /**
     * In case the Pointages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PointagesUpdateInput, PointagesUncheckedUpdateInput>
  }

  /**
   * Pointages delete
   */
  export type PointagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pointages
     */
    select?: PointagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pointages
     */
    omit?: PointagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointagesInclude<ExtArgs> | null
    /**
     * Filter which Pointages to delete.
     */
    where: PointagesWhereUniqueInput
  }

  /**
   * Pointages deleteMany
   */
  export type PointagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pointages to delete
     */
    where?: PointagesWhereInput
    /**
     * Limit how many Pointages to delete.
     */
    limit?: number
  }

  /**
   * Pointages without action
   */
  export type PointagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pointages
     */
    select?: PointagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pointages
     */
    omit?: PointagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointagesInclude<ExtArgs> | null
  }


  /**
   * Model Paiement
   */

  export type AggregatePaiement = {
    _count: PaiementCountAggregateOutputType | null
    _avg: PaiementAvgAggregateOutputType | null
    _sum: PaiementSumAggregateOutputType | null
    _min: PaiementMinAggregateOutputType | null
    _max: PaiementMaxAggregateOutputType | null
  }

  export type PaiementAvgAggregateOutputType = {
    id: number | null
    montant: Decimal | null
    bulletinId: number | null
  }

  export type PaiementSumAggregateOutputType = {
    id: number | null
    montant: Decimal | null
    bulletinId: number | null
  }

  export type PaiementMinAggregateOutputType = {
    id: number | null
    montant: Decimal | null
    mode: $Enums.ModePaiement | null
    statut: $Enums.StatutPaiement | null
    reference: string | null
    date_paiement: Date | null
    bulletinId: number | null
  }

  export type PaiementMaxAggregateOutputType = {
    id: number | null
    montant: Decimal | null
    mode: $Enums.ModePaiement | null
    statut: $Enums.StatutPaiement | null
    reference: string | null
    date_paiement: Date | null
    bulletinId: number | null
  }

  export type PaiementCountAggregateOutputType = {
    id: number
    montant: number
    mode: number
    statut: number
    reference: number
    date_paiement: number
    bulletinId: number
    _all: number
  }


  export type PaiementAvgAggregateInputType = {
    id?: true
    montant?: true
    bulletinId?: true
  }

  export type PaiementSumAggregateInputType = {
    id?: true
    montant?: true
    bulletinId?: true
  }

  export type PaiementMinAggregateInputType = {
    id?: true
    montant?: true
    mode?: true
    statut?: true
    reference?: true
    date_paiement?: true
    bulletinId?: true
  }

  export type PaiementMaxAggregateInputType = {
    id?: true
    montant?: true
    mode?: true
    statut?: true
    reference?: true
    date_paiement?: true
    bulletinId?: true
  }

  export type PaiementCountAggregateInputType = {
    id?: true
    montant?: true
    mode?: true
    statut?: true
    reference?: true
    date_paiement?: true
    bulletinId?: true
    _all?: true
  }

  export type PaiementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paiement to aggregate.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Paiements
    **/
    _count?: true | PaiementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaiementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaiementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaiementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaiementMaxAggregateInputType
  }

  export type GetPaiementAggregateType<T extends PaiementAggregateArgs> = {
        [P in keyof T & keyof AggregatePaiement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaiement[P]>
      : GetScalarType<T[P], AggregatePaiement[P]>
  }




  export type PaiementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaiementWhereInput
    orderBy?: PaiementOrderByWithAggregationInput | PaiementOrderByWithAggregationInput[]
    by: PaiementScalarFieldEnum[] | PaiementScalarFieldEnum
    having?: PaiementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaiementCountAggregateInputType | true
    _avg?: PaiementAvgAggregateInputType
    _sum?: PaiementSumAggregateInputType
    _min?: PaiementMinAggregateInputType
    _max?: PaiementMaxAggregateInputType
  }

  export type PaiementGroupByOutputType = {
    id: number
    montant: Decimal
    mode: $Enums.ModePaiement
    statut: $Enums.StatutPaiement
    reference: string | null
    date_paiement: Date
    bulletinId: number
    _count: PaiementCountAggregateOutputType | null
    _avg: PaiementAvgAggregateOutputType | null
    _sum: PaiementSumAggregateOutputType | null
    _min: PaiementMinAggregateOutputType | null
    _max: PaiementMaxAggregateOutputType | null
  }

  type GetPaiementGroupByPayload<T extends PaiementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaiementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaiementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaiementGroupByOutputType[P]>
            : GetScalarType<T[P], PaiementGroupByOutputType[P]>
        }
      >
    >


  export type PaiementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    montant?: boolean
    mode?: boolean
    statut?: boolean
    reference?: boolean
    date_paiement?: boolean
    bulletinId?: boolean
    bulletin?: boolean | BulletinsSalaireDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paiement"]>



  export type PaiementSelectScalar = {
    id?: boolean
    montant?: boolean
    mode?: boolean
    statut?: boolean
    reference?: boolean
    date_paiement?: boolean
    bulletinId?: boolean
  }

  export type PaiementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "montant" | "mode" | "statut" | "reference" | "date_paiement" | "bulletinId", ExtArgs["result"]["paiement"]>
  export type PaiementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bulletin?: boolean | BulletinsSalaireDefaultArgs<ExtArgs>
  }

  export type $PaiementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paiement"
    objects: {
      bulletin: Prisma.$BulletinsSalairePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      montant: Prisma.Decimal
      mode: $Enums.ModePaiement
      statut: $Enums.StatutPaiement
      reference: string | null
      date_paiement: Date
      bulletinId: number
    }, ExtArgs["result"]["paiement"]>
    composites: {}
  }

  type PaiementGetPayload<S extends boolean | null | undefined | PaiementDefaultArgs> = $Result.GetResult<Prisma.$PaiementPayload, S>

  type PaiementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaiementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaiementCountAggregateInputType | true
    }

  export interface PaiementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paiement'], meta: { name: 'Paiement' } }
    /**
     * Find zero or one Paiement that matches the filter.
     * @param {PaiementFindUniqueArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaiementFindUniqueArgs>(args: SelectSubset<T, PaiementFindUniqueArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paiement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaiementFindUniqueOrThrowArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaiementFindUniqueOrThrowArgs>(args: SelectSubset<T, PaiementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paiement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementFindFirstArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaiementFindFirstArgs>(args?: SelectSubset<T, PaiementFindFirstArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paiement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementFindFirstOrThrowArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaiementFindFirstOrThrowArgs>(args?: SelectSubset<T, PaiementFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Paiements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Paiements
     * const paiements = await prisma.paiement.findMany()
     * 
     * // Get first 10 Paiements
     * const paiements = await prisma.paiement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paiementWithIdOnly = await prisma.paiement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaiementFindManyArgs>(args?: SelectSubset<T, PaiementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paiement.
     * @param {PaiementCreateArgs} args - Arguments to create a Paiement.
     * @example
     * // Create one Paiement
     * const Paiement = await prisma.paiement.create({
     *   data: {
     *     // ... data to create a Paiement
     *   }
     * })
     * 
     */
    create<T extends PaiementCreateArgs>(args: SelectSubset<T, PaiementCreateArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Paiements.
     * @param {PaiementCreateManyArgs} args - Arguments to create many Paiements.
     * @example
     * // Create many Paiements
     * const paiement = await prisma.paiement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaiementCreateManyArgs>(args?: SelectSubset<T, PaiementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Paiement.
     * @param {PaiementDeleteArgs} args - Arguments to delete one Paiement.
     * @example
     * // Delete one Paiement
     * const Paiement = await prisma.paiement.delete({
     *   where: {
     *     // ... filter to delete one Paiement
     *   }
     * })
     * 
     */
    delete<T extends PaiementDeleteArgs>(args: SelectSubset<T, PaiementDeleteArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paiement.
     * @param {PaiementUpdateArgs} args - Arguments to update one Paiement.
     * @example
     * // Update one Paiement
     * const paiement = await prisma.paiement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaiementUpdateArgs>(args: SelectSubset<T, PaiementUpdateArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Paiements.
     * @param {PaiementDeleteManyArgs} args - Arguments to filter Paiements to delete.
     * @example
     * // Delete a few Paiements
     * const { count } = await prisma.paiement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaiementDeleteManyArgs>(args?: SelectSubset<T, PaiementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paiements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Paiements
     * const paiement = await prisma.paiement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaiementUpdateManyArgs>(args: SelectSubset<T, PaiementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Paiement.
     * @param {PaiementUpsertArgs} args - Arguments to update or create a Paiement.
     * @example
     * // Update or create a Paiement
     * const paiement = await prisma.paiement.upsert({
     *   create: {
     *     // ... data to create a Paiement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paiement we want to update
     *   }
     * })
     */
    upsert<T extends PaiementUpsertArgs>(args: SelectSubset<T, PaiementUpsertArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Paiements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementCountArgs} args - Arguments to filter Paiements to count.
     * @example
     * // Count the number of Paiements
     * const count = await prisma.paiement.count({
     *   where: {
     *     // ... the filter for the Paiements we want to count
     *   }
     * })
    **/
    count<T extends PaiementCountArgs>(
      args?: Subset<T, PaiementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaiementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paiement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaiementAggregateArgs>(args: Subset<T, PaiementAggregateArgs>): Prisma.PrismaPromise<GetPaiementAggregateType<T>>

    /**
     * Group by Paiement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaiementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaiementGroupByArgs['orderBy'] }
        : { orderBy?: PaiementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaiementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaiementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paiement model
   */
  readonly fields: PaiementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paiement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaiementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bulletin<T extends BulletinsSalaireDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BulletinsSalaireDefaultArgs<ExtArgs>>): Prisma__BulletinsSalaireClient<$Result.GetResult<Prisma.$BulletinsSalairePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Paiement model
   */
  interface PaiementFieldRefs {
    readonly id: FieldRef<"Paiement", 'Int'>
    readonly montant: FieldRef<"Paiement", 'Decimal'>
    readonly mode: FieldRef<"Paiement", 'ModePaiement'>
    readonly statut: FieldRef<"Paiement", 'StatutPaiement'>
    readonly reference: FieldRef<"Paiement", 'String'>
    readonly date_paiement: FieldRef<"Paiement", 'DateTime'>
    readonly bulletinId: FieldRef<"Paiement", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Paiement findUnique
   */
  export type PaiementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement findUniqueOrThrow
   */
  export type PaiementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement findFirst
   */
  export type PaiementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paiements.
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paiements.
     */
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * Paiement findFirstOrThrow
   */
  export type PaiementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paiements.
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paiements.
     */
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * Paiement findMany
   */
  export type PaiementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiements to fetch.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Paiements.
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * Paiement create
   */
  export type PaiementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * The data needed to create a Paiement.
     */
    data: XOR<PaiementCreateInput, PaiementUncheckedCreateInput>
  }

  /**
   * Paiement createMany
   */
  export type PaiementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Paiements.
     */
    data: PaiementCreateManyInput | PaiementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paiement update
   */
  export type PaiementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * The data needed to update a Paiement.
     */
    data: XOR<PaiementUpdateInput, PaiementUncheckedUpdateInput>
    /**
     * Choose, which Paiement to update.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement updateMany
   */
  export type PaiementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Paiements.
     */
    data: XOR<PaiementUpdateManyMutationInput, PaiementUncheckedUpdateManyInput>
    /**
     * Filter which Paiements to update
     */
    where?: PaiementWhereInput
    /**
     * Limit how many Paiements to update.
     */
    limit?: number
  }

  /**
   * Paiement upsert
   */
  export type PaiementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * The filter to search for the Paiement to update in case it exists.
     */
    where: PaiementWhereUniqueInput
    /**
     * In case the Paiement found by the `where` argument doesn't exist, create a new Paiement with this data.
     */
    create: XOR<PaiementCreateInput, PaiementUncheckedCreateInput>
    /**
     * In case the Paiement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaiementUpdateInput, PaiementUncheckedUpdateInput>
  }

  /**
   * Paiement delete
   */
  export type PaiementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter which Paiement to delete.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement deleteMany
   */
  export type PaiementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paiements to delete
     */
    where?: PaiementWhereInput
    /**
     * Limit how many Paiements to delete.
     */
    limit?: number
  }

  /**
   * Paiement without action
   */
  export type PaiementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EmployesScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    prenom: 'prenom',
    email: 'email',
    telephone: 'telephone',
    poste: 'poste',
    date_embauche: 'date_embauche',
    date_arret: 'date_arret',
    typeContrat: 'typeContrat',
    role: 'role',
    statut: 'statut'
  };

  export type EmployesScalarFieldEnum = (typeof EmployesScalarFieldEnum)[keyof typeof EmployesScalarFieldEnum]


  export const BulletinsSalaireScalarFieldEnum: {
    id: 'id',
    mois: 'mois',
    salaire_base: 'salaire_base',
    deductions: 'deductions',
    salaire_net: 'salaire_net',
    date_generation: 'date_generation',
    payRunId: 'payRunId',
    employeId: 'employeId'
  };

  export type BulletinsSalaireScalarFieldEnum = (typeof BulletinsSalaireScalarFieldEnum)[keyof typeof BulletinsSalaireScalarFieldEnum]


  export const PayRunScalarFieldEnum: {
    id: 'id',
    periodeDebut: 'periodeDebut',
    periodeFin: 'periodeFin',
    statut: 'statut',
    typePayRun: 'typePayRun',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PayRunScalarFieldEnum = (typeof PayRunScalarFieldEnum)[keyof typeof PayRunScalarFieldEnum]


  export const ContratScalarFieldEnum: {
    id: 'id',
    employeId: 'employeId',
    type: 'type',
    salaireFixe: 'salaireFixe',
    tauxJournalier: 'tauxJournalier',
    tauxHoraire: 'tauxHoraire',
    date_embauche: 'date_embauche',
    date_arret: 'date_arret'
  };

  export type ContratScalarFieldEnum = (typeof ContratScalarFieldEnum)[keyof typeof ContratScalarFieldEnum]


  export const PointagesScalarFieldEnum: {
    id: 'id',
    employeId: 'employeId',
    date: 'date',
    entree: 'entree',
    sortie: 'sortie'
  };

  export type PointagesScalarFieldEnum = (typeof PointagesScalarFieldEnum)[keyof typeof PointagesScalarFieldEnum]


  export const PaiementScalarFieldEnum: {
    id: 'id',
    montant: 'montant',
    mode: 'mode',
    statut: 'statut',
    reference: 'reference',
    date_paiement: 'date_paiement',
    bulletinId: 'bulletinId'
  };

  export type PaiementScalarFieldEnum = (typeof PaiementScalarFieldEnum)[keyof typeof PaiementScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const EmployesOrderByRelevanceFieldEnum: {
    nom: 'nom',
    prenom: 'prenom',
    email: 'email',
    telephone: 'telephone',
    poste: 'poste'
  };

  export type EmployesOrderByRelevanceFieldEnum = (typeof EmployesOrderByRelevanceFieldEnum)[keyof typeof EmployesOrderByRelevanceFieldEnum]


  export const BulletinsSalaireOrderByRelevanceFieldEnum: {
    mois: 'mois'
  };

  export type BulletinsSalaireOrderByRelevanceFieldEnum = (typeof BulletinsSalaireOrderByRelevanceFieldEnum)[keyof typeof BulletinsSalaireOrderByRelevanceFieldEnum]


  export const PaiementOrderByRelevanceFieldEnum: {
    reference: 'reference'
  };

  export type PaiementOrderByRelevanceFieldEnum = (typeof PaiementOrderByRelevanceFieldEnum)[keyof typeof PaiementOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'TypeContrat'
   */
  export type EnumTypeContratFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeContrat'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Statut'
   */
  export type EnumStatutFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Statut'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'PayRunStatut'
   */
  export type EnumPayRunStatutFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayRunStatut'>
    


  /**
   * Reference to a field of type 'TypePayRun'
   */
  export type EnumTypePayRunFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypePayRun'>
    


  /**
   * Reference to a field of type 'ModePaiement'
   */
  export type EnumModePaiementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModePaiement'>
    


  /**
   * Reference to a field of type 'StatutPaiement'
   */
  export type EnumStatutPaiementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutPaiement'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type EmployesWhereInput = {
    AND?: EmployesWhereInput | EmployesWhereInput[]
    OR?: EmployesWhereInput[]
    NOT?: EmployesWhereInput | EmployesWhereInput[]
    id?: IntFilter<"Employes"> | number
    nom?: StringFilter<"Employes"> | string
    prenom?: StringFilter<"Employes"> | string
    email?: StringFilter<"Employes"> | string
    telephone?: StringFilter<"Employes"> | string
    poste?: StringFilter<"Employes"> | string
    date_embauche?: DateTimeFilter<"Employes"> | Date | string
    date_arret?: DateTimeNullableFilter<"Employes"> | Date | string | null
    typeContrat?: EnumTypeContratFilter<"Employes"> | $Enums.TypeContrat
    role?: EnumRoleFilter<"Employes"> | $Enums.Role
    statut?: EnumStatutFilter<"Employes"> | $Enums.Statut
    bulletins?: BulletinsSalaireListRelationFilter
    Contrat?: ContratListRelationFilter
    pointage?: PointagesListRelationFilter
  }

  export type EmployesOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    poste?: SortOrder
    date_embauche?: SortOrder
    date_arret?: SortOrderInput | SortOrder
    typeContrat?: SortOrder
    role?: SortOrder
    statut?: SortOrder
    bulletins?: BulletinsSalaireOrderByRelationAggregateInput
    Contrat?: ContratOrderByRelationAggregateInput
    pointage?: PointagesOrderByRelationAggregateInput
    _relevance?: EmployesOrderByRelevanceInput
  }

  export type EmployesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    telephone?: string
    AND?: EmployesWhereInput | EmployesWhereInput[]
    OR?: EmployesWhereInput[]
    NOT?: EmployesWhereInput | EmployesWhereInput[]
    nom?: StringFilter<"Employes"> | string
    prenom?: StringFilter<"Employes"> | string
    poste?: StringFilter<"Employes"> | string
    date_embauche?: DateTimeFilter<"Employes"> | Date | string
    date_arret?: DateTimeNullableFilter<"Employes"> | Date | string | null
    typeContrat?: EnumTypeContratFilter<"Employes"> | $Enums.TypeContrat
    role?: EnumRoleFilter<"Employes"> | $Enums.Role
    statut?: EnumStatutFilter<"Employes"> | $Enums.Statut
    bulletins?: BulletinsSalaireListRelationFilter
    Contrat?: ContratListRelationFilter
    pointage?: PointagesListRelationFilter
  }, "id" | "email" | "telephone">

  export type EmployesOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    poste?: SortOrder
    date_embauche?: SortOrder
    date_arret?: SortOrderInput | SortOrder
    typeContrat?: SortOrder
    role?: SortOrder
    statut?: SortOrder
    _count?: EmployesCountOrderByAggregateInput
    _avg?: EmployesAvgOrderByAggregateInput
    _max?: EmployesMaxOrderByAggregateInput
    _min?: EmployesMinOrderByAggregateInput
    _sum?: EmployesSumOrderByAggregateInput
  }

  export type EmployesScalarWhereWithAggregatesInput = {
    AND?: EmployesScalarWhereWithAggregatesInput | EmployesScalarWhereWithAggregatesInput[]
    OR?: EmployesScalarWhereWithAggregatesInput[]
    NOT?: EmployesScalarWhereWithAggregatesInput | EmployesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Employes"> | number
    nom?: StringWithAggregatesFilter<"Employes"> | string
    prenom?: StringWithAggregatesFilter<"Employes"> | string
    email?: StringWithAggregatesFilter<"Employes"> | string
    telephone?: StringWithAggregatesFilter<"Employes"> | string
    poste?: StringWithAggregatesFilter<"Employes"> | string
    date_embauche?: DateTimeWithAggregatesFilter<"Employes"> | Date | string
    date_arret?: DateTimeNullableWithAggregatesFilter<"Employes"> | Date | string | null
    typeContrat?: EnumTypeContratWithAggregatesFilter<"Employes"> | $Enums.TypeContrat
    role?: EnumRoleWithAggregatesFilter<"Employes"> | $Enums.Role
    statut?: EnumStatutWithAggregatesFilter<"Employes"> | $Enums.Statut
  }

  export type BulletinsSalaireWhereInput = {
    AND?: BulletinsSalaireWhereInput | BulletinsSalaireWhereInput[]
    OR?: BulletinsSalaireWhereInput[]
    NOT?: BulletinsSalaireWhereInput | BulletinsSalaireWhereInput[]
    id?: IntFilter<"BulletinsSalaire"> | number
    mois?: StringFilter<"BulletinsSalaire"> | string
    salaire_base?: DecimalNullableFilter<"BulletinsSalaire"> | Decimal | DecimalJsLike | number | string | null
    deductions?: DecimalFilter<"BulletinsSalaire"> | Decimal | DecimalJsLike | number | string
    salaire_net?: DecimalFilter<"BulletinsSalaire"> | Decimal | DecimalJsLike | number | string
    date_generation?: DateTimeFilter<"BulletinsSalaire"> | Date | string
    payRunId?: IntFilter<"BulletinsSalaire"> | number
    employeId?: IntFilter<"BulletinsSalaire"> | number
    payRun?: XOR<PayRunScalarRelationFilter, PayRunWhereInput>
    employe?: XOR<EmployesScalarRelationFilter, EmployesWhereInput>
    paiements?: PaiementListRelationFilter
  }

  export type BulletinsSalaireOrderByWithRelationInput = {
    id?: SortOrder
    mois?: SortOrder
    salaire_base?: SortOrderInput | SortOrder
    deductions?: SortOrder
    salaire_net?: SortOrder
    date_generation?: SortOrder
    payRunId?: SortOrder
    employeId?: SortOrder
    payRun?: PayRunOrderByWithRelationInput
    employe?: EmployesOrderByWithRelationInput
    paiements?: PaiementOrderByRelationAggregateInput
    _relevance?: BulletinsSalaireOrderByRelevanceInput
  }

  export type BulletinsSalaireWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BulletinsSalaireWhereInput | BulletinsSalaireWhereInput[]
    OR?: BulletinsSalaireWhereInput[]
    NOT?: BulletinsSalaireWhereInput | BulletinsSalaireWhereInput[]
    mois?: StringFilter<"BulletinsSalaire"> | string
    salaire_base?: DecimalNullableFilter<"BulletinsSalaire"> | Decimal | DecimalJsLike | number | string | null
    deductions?: DecimalFilter<"BulletinsSalaire"> | Decimal | DecimalJsLike | number | string
    salaire_net?: DecimalFilter<"BulletinsSalaire"> | Decimal | DecimalJsLike | number | string
    date_generation?: DateTimeFilter<"BulletinsSalaire"> | Date | string
    payRunId?: IntFilter<"BulletinsSalaire"> | number
    employeId?: IntFilter<"BulletinsSalaire"> | number
    payRun?: XOR<PayRunScalarRelationFilter, PayRunWhereInput>
    employe?: XOR<EmployesScalarRelationFilter, EmployesWhereInput>
    paiements?: PaiementListRelationFilter
  }, "id">

  export type BulletinsSalaireOrderByWithAggregationInput = {
    id?: SortOrder
    mois?: SortOrder
    salaire_base?: SortOrderInput | SortOrder
    deductions?: SortOrder
    salaire_net?: SortOrder
    date_generation?: SortOrder
    payRunId?: SortOrder
    employeId?: SortOrder
    _count?: BulletinsSalaireCountOrderByAggregateInput
    _avg?: BulletinsSalaireAvgOrderByAggregateInput
    _max?: BulletinsSalaireMaxOrderByAggregateInput
    _min?: BulletinsSalaireMinOrderByAggregateInput
    _sum?: BulletinsSalaireSumOrderByAggregateInput
  }

  export type BulletinsSalaireScalarWhereWithAggregatesInput = {
    AND?: BulletinsSalaireScalarWhereWithAggregatesInput | BulletinsSalaireScalarWhereWithAggregatesInput[]
    OR?: BulletinsSalaireScalarWhereWithAggregatesInput[]
    NOT?: BulletinsSalaireScalarWhereWithAggregatesInput | BulletinsSalaireScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BulletinsSalaire"> | number
    mois?: StringWithAggregatesFilter<"BulletinsSalaire"> | string
    salaire_base?: DecimalNullableWithAggregatesFilter<"BulletinsSalaire"> | Decimal | DecimalJsLike | number | string | null
    deductions?: DecimalWithAggregatesFilter<"BulletinsSalaire"> | Decimal | DecimalJsLike | number | string
    salaire_net?: DecimalWithAggregatesFilter<"BulletinsSalaire"> | Decimal | DecimalJsLike | number | string
    date_generation?: DateTimeWithAggregatesFilter<"BulletinsSalaire"> | Date | string
    payRunId?: IntWithAggregatesFilter<"BulletinsSalaire"> | number
    employeId?: IntWithAggregatesFilter<"BulletinsSalaire"> | number
  }

  export type PayRunWhereInput = {
    AND?: PayRunWhereInput | PayRunWhereInput[]
    OR?: PayRunWhereInput[]
    NOT?: PayRunWhereInput | PayRunWhereInput[]
    id?: IntFilter<"PayRun"> | number
    periodeDebut?: DateTimeFilter<"PayRun"> | Date | string
    periodeFin?: DateTimeFilter<"PayRun"> | Date | string
    statut?: EnumPayRunStatutFilter<"PayRun"> | $Enums.PayRunStatut
    typePayRun?: EnumTypePayRunFilter<"PayRun"> | $Enums.TypePayRun
    createdAt?: DateTimeFilter<"PayRun"> | Date | string
    updatedAt?: DateTimeFilter<"PayRun"> | Date | string
    bulletins?: BulletinsSalaireListRelationFilter
  }

  export type PayRunOrderByWithRelationInput = {
    id?: SortOrder
    periodeDebut?: SortOrder
    periodeFin?: SortOrder
    statut?: SortOrder
    typePayRun?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bulletins?: BulletinsSalaireOrderByRelationAggregateInput
  }

  export type PayRunWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PayRunWhereInput | PayRunWhereInput[]
    OR?: PayRunWhereInput[]
    NOT?: PayRunWhereInput | PayRunWhereInput[]
    periodeDebut?: DateTimeFilter<"PayRun"> | Date | string
    periodeFin?: DateTimeFilter<"PayRun"> | Date | string
    statut?: EnumPayRunStatutFilter<"PayRun"> | $Enums.PayRunStatut
    typePayRun?: EnumTypePayRunFilter<"PayRun"> | $Enums.TypePayRun
    createdAt?: DateTimeFilter<"PayRun"> | Date | string
    updatedAt?: DateTimeFilter<"PayRun"> | Date | string
    bulletins?: BulletinsSalaireListRelationFilter
  }, "id">

  export type PayRunOrderByWithAggregationInput = {
    id?: SortOrder
    periodeDebut?: SortOrder
    periodeFin?: SortOrder
    statut?: SortOrder
    typePayRun?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PayRunCountOrderByAggregateInput
    _avg?: PayRunAvgOrderByAggregateInput
    _max?: PayRunMaxOrderByAggregateInput
    _min?: PayRunMinOrderByAggregateInput
    _sum?: PayRunSumOrderByAggregateInput
  }

  export type PayRunScalarWhereWithAggregatesInput = {
    AND?: PayRunScalarWhereWithAggregatesInput | PayRunScalarWhereWithAggregatesInput[]
    OR?: PayRunScalarWhereWithAggregatesInput[]
    NOT?: PayRunScalarWhereWithAggregatesInput | PayRunScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PayRun"> | number
    periodeDebut?: DateTimeWithAggregatesFilter<"PayRun"> | Date | string
    periodeFin?: DateTimeWithAggregatesFilter<"PayRun"> | Date | string
    statut?: EnumPayRunStatutWithAggregatesFilter<"PayRun"> | $Enums.PayRunStatut
    typePayRun?: EnumTypePayRunWithAggregatesFilter<"PayRun"> | $Enums.TypePayRun
    createdAt?: DateTimeWithAggregatesFilter<"PayRun"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PayRun"> | Date | string
  }

  export type ContratWhereInput = {
    AND?: ContratWhereInput | ContratWhereInput[]
    OR?: ContratWhereInput[]
    NOT?: ContratWhereInput | ContratWhereInput[]
    id?: IntFilter<"Contrat"> | number
    employeId?: IntFilter<"Contrat"> | number
    type?: EnumTypeContratFilter<"Contrat"> | $Enums.TypeContrat
    salaireFixe?: DecimalNullableFilter<"Contrat"> | Decimal | DecimalJsLike | number | string | null
    tauxJournalier?: DecimalNullableFilter<"Contrat"> | Decimal | DecimalJsLike | number | string | null
    tauxHoraire?: DecimalNullableFilter<"Contrat"> | Decimal | DecimalJsLike | number | string | null
    date_embauche?: DateTimeFilter<"Contrat"> | Date | string
    date_arret?: DateTimeNullableFilter<"Contrat"> | Date | string | null
    employe?: XOR<EmployesScalarRelationFilter, EmployesWhereInput>
  }

  export type ContratOrderByWithRelationInput = {
    id?: SortOrder
    employeId?: SortOrder
    type?: SortOrder
    salaireFixe?: SortOrderInput | SortOrder
    tauxJournalier?: SortOrderInput | SortOrder
    tauxHoraire?: SortOrderInput | SortOrder
    date_embauche?: SortOrder
    date_arret?: SortOrderInput | SortOrder
    employe?: EmployesOrderByWithRelationInput
  }

  export type ContratWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContratWhereInput | ContratWhereInput[]
    OR?: ContratWhereInput[]
    NOT?: ContratWhereInput | ContratWhereInput[]
    employeId?: IntFilter<"Contrat"> | number
    type?: EnumTypeContratFilter<"Contrat"> | $Enums.TypeContrat
    salaireFixe?: DecimalNullableFilter<"Contrat"> | Decimal | DecimalJsLike | number | string | null
    tauxJournalier?: DecimalNullableFilter<"Contrat"> | Decimal | DecimalJsLike | number | string | null
    tauxHoraire?: DecimalNullableFilter<"Contrat"> | Decimal | DecimalJsLike | number | string | null
    date_embauche?: DateTimeFilter<"Contrat"> | Date | string
    date_arret?: DateTimeNullableFilter<"Contrat"> | Date | string | null
    employe?: XOR<EmployesScalarRelationFilter, EmployesWhereInput>
  }, "id">

  export type ContratOrderByWithAggregationInput = {
    id?: SortOrder
    employeId?: SortOrder
    type?: SortOrder
    salaireFixe?: SortOrderInput | SortOrder
    tauxJournalier?: SortOrderInput | SortOrder
    tauxHoraire?: SortOrderInput | SortOrder
    date_embauche?: SortOrder
    date_arret?: SortOrderInput | SortOrder
    _count?: ContratCountOrderByAggregateInput
    _avg?: ContratAvgOrderByAggregateInput
    _max?: ContratMaxOrderByAggregateInput
    _min?: ContratMinOrderByAggregateInput
    _sum?: ContratSumOrderByAggregateInput
  }

  export type ContratScalarWhereWithAggregatesInput = {
    AND?: ContratScalarWhereWithAggregatesInput | ContratScalarWhereWithAggregatesInput[]
    OR?: ContratScalarWhereWithAggregatesInput[]
    NOT?: ContratScalarWhereWithAggregatesInput | ContratScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contrat"> | number
    employeId?: IntWithAggregatesFilter<"Contrat"> | number
    type?: EnumTypeContratWithAggregatesFilter<"Contrat"> | $Enums.TypeContrat
    salaireFixe?: DecimalNullableWithAggregatesFilter<"Contrat"> | Decimal | DecimalJsLike | number | string | null
    tauxJournalier?: DecimalNullableWithAggregatesFilter<"Contrat"> | Decimal | DecimalJsLike | number | string | null
    tauxHoraire?: DecimalNullableWithAggregatesFilter<"Contrat"> | Decimal | DecimalJsLike | number | string | null
    date_embauche?: DateTimeWithAggregatesFilter<"Contrat"> | Date | string
    date_arret?: DateTimeNullableWithAggregatesFilter<"Contrat"> | Date | string | null
  }

  export type PointagesWhereInput = {
    AND?: PointagesWhereInput | PointagesWhereInput[]
    OR?: PointagesWhereInput[]
    NOT?: PointagesWhereInput | PointagesWhereInput[]
    id?: IntFilter<"Pointages"> | number
    employeId?: IntFilter<"Pointages"> | number
    date?: DateTimeFilter<"Pointages"> | Date | string
    entree?: DateTimeFilter<"Pointages"> | Date | string
    sortie?: DateTimeFilter<"Pointages"> | Date | string
    employe?: XOR<EmployesScalarRelationFilter, EmployesWhereInput>
  }

  export type PointagesOrderByWithRelationInput = {
    id?: SortOrder
    employeId?: SortOrder
    date?: SortOrder
    entree?: SortOrder
    sortie?: SortOrder
    employe?: EmployesOrderByWithRelationInput
  }

  export type PointagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PointagesWhereInput | PointagesWhereInput[]
    OR?: PointagesWhereInput[]
    NOT?: PointagesWhereInput | PointagesWhereInput[]
    employeId?: IntFilter<"Pointages"> | number
    date?: DateTimeFilter<"Pointages"> | Date | string
    entree?: DateTimeFilter<"Pointages"> | Date | string
    sortie?: DateTimeFilter<"Pointages"> | Date | string
    employe?: XOR<EmployesScalarRelationFilter, EmployesWhereInput>
  }, "id">

  export type PointagesOrderByWithAggregationInput = {
    id?: SortOrder
    employeId?: SortOrder
    date?: SortOrder
    entree?: SortOrder
    sortie?: SortOrder
    _count?: PointagesCountOrderByAggregateInput
    _avg?: PointagesAvgOrderByAggregateInput
    _max?: PointagesMaxOrderByAggregateInput
    _min?: PointagesMinOrderByAggregateInput
    _sum?: PointagesSumOrderByAggregateInput
  }

  export type PointagesScalarWhereWithAggregatesInput = {
    AND?: PointagesScalarWhereWithAggregatesInput | PointagesScalarWhereWithAggregatesInput[]
    OR?: PointagesScalarWhereWithAggregatesInput[]
    NOT?: PointagesScalarWhereWithAggregatesInput | PointagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pointages"> | number
    employeId?: IntWithAggregatesFilter<"Pointages"> | number
    date?: DateTimeWithAggregatesFilter<"Pointages"> | Date | string
    entree?: DateTimeWithAggregatesFilter<"Pointages"> | Date | string
    sortie?: DateTimeWithAggregatesFilter<"Pointages"> | Date | string
  }

  export type PaiementWhereInput = {
    AND?: PaiementWhereInput | PaiementWhereInput[]
    OR?: PaiementWhereInput[]
    NOT?: PaiementWhereInput | PaiementWhereInput[]
    id?: IntFilter<"Paiement"> | number
    montant?: DecimalFilter<"Paiement"> | Decimal | DecimalJsLike | number | string
    mode?: EnumModePaiementFilter<"Paiement"> | $Enums.ModePaiement
    statut?: EnumStatutPaiementFilter<"Paiement"> | $Enums.StatutPaiement
    reference?: StringNullableFilter<"Paiement"> | string | null
    date_paiement?: DateTimeFilter<"Paiement"> | Date | string
    bulletinId?: IntFilter<"Paiement"> | number
    bulletin?: XOR<BulletinsSalaireScalarRelationFilter, BulletinsSalaireWhereInput>
  }

  export type PaiementOrderByWithRelationInput = {
    id?: SortOrder
    montant?: SortOrder
    mode?: SortOrder
    statut?: SortOrder
    reference?: SortOrderInput | SortOrder
    date_paiement?: SortOrder
    bulletinId?: SortOrder
    bulletin?: BulletinsSalaireOrderByWithRelationInput
    _relevance?: PaiementOrderByRelevanceInput
  }

  export type PaiementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaiementWhereInput | PaiementWhereInput[]
    OR?: PaiementWhereInput[]
    NOT?: PaiementWhereInput | PaiementWhereInput[]
    montant?: DecimalFilter<"Paiement"> | Decimal | DecimalJsLike | number | string
    mode?: EnumModePaiementFilter<"Paiement"> | $Enums.ModePaiement
    statut?: EnumStatutPaiementFilter<"Paiement"> | $Enums.StatutPaiement
    reference?: StringNullableFilter<"Paiement"> | string | null
    date_paiement?: DateTimeFilter<"Paiement"> | Date | string
    bulletinId?: IntFilter<"Paiement"> | number
    bulletin?: XOR<BulletinsSalaireScalarRelationFilter, BulletinsSalaireWhereInput>
  }, "id">

  export type PaiementOrderByWithAggregationInput = {
    id?: SortOrder
    montant?: SortOrder
    mode?: SortOrder
    statut?: SortOrder
    reference?: SortOrderInput | SortOrder
    date_paiement?: SortOrder
    bulletinId?: SortOrder
    _count?: PaiementCountOrderByAggregateInput
    _avg?: PaiementAvgOrderByAggregateInput
    _max?: PaiementMaxOrderByAggregateInput
    _min?: PaiementMinOrderByAggregateInput
    _sum?: PaiementSumOrderByAggregateInput
  }

  export type PaiementScalarWhereWithAggregatesInput = {
    AND?: PaiementScalarWhereWithAggregatesInput | PaiementScalarWhereWithAggregatesInput[]
    OR?: PaiementScalarWhereWithAggregatesInput[]
    NOT?: PaiementScalarWhereWithAggregatesInput | PaiementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Paiement"> | number
    montant?: DecimalWithAggregatesFilter<"Paiement"> | Decimal | DecimalJsLike | number | string
    mode?: EnumModePaiementWithAggregatesFilter<"Paiement"> | $Enums.ModePaiement
    statut?: EnumStatutPaiementWithAggregatesFilter<"Paiement"> | $Enums.StatutPaiement
    reference?: StringNullableWithAggregatesFilter<"Paiement"> | string | null
    date_paiement?: DateTimeWithAggregatesFilter<"Paiement"> | Date | string
    bulletinId?: IntWithAggregatesFilter<"Paiement"> | number
  }

  export type EmployesCreateInput = {
    nom: string
    prenom: string
    email: string
    telephone: string
    poste: string
    date_embauche: Date | string
    date_arret?: Date | string | null
    typeContrat: $Enums.TypeContrat
    role?: $Enums.Role
    statut?: $Enums.Statut
    bulletins?: BulletinsSalaireCreateNestedManyWithoutEmployeInput
    Contrat?: ContratCreateNestedManyWithoutEmployeInput
    pointage?: PointagesCreateNestedManyWithoutEmployeInput
  }

  export type EmployesUncheckedCreateInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    telephone: string
    poste: string
    date_embauche: Date | string
    date_arret?: Date | string | null
    typeContrat: $Enums.TypeContrat
    role?: $Enums.Role
    statut?: $Enums.Statut
    bulletins?: BulletinsSalaireUncheckedCreateNestedManyWithoutEmployeInput
    Contrat?: ContratUncheckedCreateNestedManyWithoutEmployeInput
    pointage?: PointagesUncheckedCreateNestedManyWithoutEmployeInput
  }

  export type EmployesUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    date_embauche?: DateTimeFieldUpdateOperationsInput | Date | string
    date_arret?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typeContrat?: EnumTypeContratFieldUpdateOperationsInput | $Enums.TypeContrat
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    bulletins?: BulletinsSalaireUpdateManyWithoutEmployeNestedInput
    Contrat?: ContratUpdateManyWithoutEmployeNestedInput
    pointage?: PointagesUpdateManyWithoutEmployeNestedInput
  }

  export type EmployesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    date_embauche?: DateTimeFieldUpdateOperationsInput | Date | string
    date_arret?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typeContrat?: EnumTypeContratFieldUpdateOperationsInput | $Enums.TypeContrat
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    bulletins?: BulletinsSalaireUncheckedUpdateManyWithoutEmployeNestedInput
    Contrat?: ContratUncheckedUpdateManyWithoutEmployeNestedInput
    pointage?: PointagesUncheckedUpdateManyWithoutEmployeNestedInput
  }

  export type EmployesCreateManyInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    telephone: string
    poste: string
    date_embauche: Date | string
    date_arret?: Date | string | null
    typeContrat: $Enums.TypeContrat
    role?: $Enums.Role
    statut?: $Enums.Statut
  }

  export type EmployesUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    date_embauche?: DateTimeFieldUpdateOperationsInput | Date | string
    date_arret?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typeContrat?: EnumTypeContratFieldUpdateOperationsInput | $Enums.TypeContrat
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
  }

  export type EmployesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    date_embauche?: DateTimeFieldUpdateOperationsInput | Date | string
    date_arret?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typeContrat?: EnumTypeContratFieldUpdateOperationsInput | $Enums.TypeContrat
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
  }

  export type BulletinsSalaireCreateInput = {
    mois: string
    salaire_base?: Decimal | DecimalJsLike | number | string | null
    deductions?: Decimal | DecimalJsLike | number | string
    salaire_net: Decimal | DecimalJsLike | number | string
    date_generation?: Date | string
    payRun: PayRunCreateNestedOneWithoutBulletinsInput
    employe: EmployesCreateNestedOneWithoutBulletinsInput
    paiements?: PaiementCreateNestedManyWithoutBulletinInput
  }

  export type BulletinsSalaireUncheckedCreateInput = {
    id?: number
    mois: string
    salaire_base?: Decimal | DecimalJsLike | number | string | null
    deductions?: Decimal | DecimalJsLike | number | string
    salaire_net: Decimal | DecimalJsLike | number | string
    date_generation?: Date | string
    payRunId: number
    employeId: number
    paiements?: PaiementUncheckedCreateNestedManyWithoutBulletinInput
  }

  export type BulletinsSalaireUpdateInput = {
    mois?: StringFieldUpdateOperationsInput | string
    salaire_base?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salaire_net?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date_generation?: DateTimeFieldUpdateOperationsInput | Date | string
    payRun?: PayRunUpdateOneRequiredWithoutBulletinsNestedInput
    employe?: EmployesUpdateOneRequiredWithoutBulletinsNestedInput
    paiements?: PaiementUpdateManyWithoutBulletinNestedInput
  }

  export type BulletinsSalaireUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mois?: StringFieldUpdateOperationsInput | string
    salaire_base?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salaire_net?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date_generation?: DateTimeFieldUpdateOperationsInput | Date | string
    payRunId?: IntFieldUpdateOperationsInput | number
    employeId?: IntFieldUpdateOperationsInput | number
    paiements?: PaiementUncheckedUpdateManyWithoutBulletinNestedInput
  }

  export type BulletinsSalaireCreateManyInput = {
    id?: number
    mois: string
    salaire_base?: Decimal | DecimalJsLike | number | string | null
    deductions?: Decimal | DecimalJsLike | number | string
    salaire_net: Decimal | DecimalJsLike | number | string
    date_generation?: Date | string
    payRunId: number
    employeId: number
  }

  export type BulletinsSalaireUpdateManyMutationInput = {
    mois?: StringFieldUpdateOperationsInput | string
    salaire_base?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salaire_net?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date_generation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulletinsSalaireUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mois?: StringFieldUpdateOperationsInput | string
    salaire_base?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salaire_net?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date_generation?: DateTimeFieldUpdateOperationsInput | Date | string
    payRunId?: IntFieldUpdateOperationsInput | number
    employeId?: IntFieldUpdateOperationsInput | number
  }

  export type PayRunCreateInput = {
    periodeDebut: Date | string
    periodeFin: Date | string
    statut?: $Enums.PayRunStatut
    typePayRun?: $Enums.TypePayRun
    createdAt?: Date | string
    updatedAt?: Date | string
    bulletins?: BulletinsSalaireCreateNestedManyWithoutPayRunInput
  }

  export type PayRunUncheckedCreateInput = {
    id?: number
    periodeDebut: Date | string
    periodeFin: Date | string
    statut?: $Enums.PayRunStatut
    typePayRun?: $Enums.TypePayRun
    createdAt?: Date | string
    updatedAt?: Date | string
    bulletins?: BulletinsSalaireUncheckedCreateNestedManyWithoutPayRunInput
  }

  export type PayRunUpdateInput = {
    periodeDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    periodeFin?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: EnumPayRunStatutFieldUpdateOperationsInput | $Enums.PayRunStatut
    typePayRun?: EnumTypePayRunFieldUpdateOperationsInput | $Enums.TypePayRun
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bulletins?: BulletinsSalaireUpdateManyWithoutPayRunNestedInput
  }

  export type PayRunUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    periodeDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    periodeFin?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: EnumPayRunStatutFieldUpdateOperationsInput | $Enums.PayRunStatut
    typePayRun?: EnumTypePayRunFieldUpdateOperationsInput | $Enums.TypePayRun
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bulletins?: BulletinsSalaireUncheckedUpdateManyWithoutPayRunNestedInput
  }

  export type PayRunCreateManyInput = {
    id?: number
    periodeDebut: Date | string
    periodeFin: Date | string
    statut?: $Enums.PayRunStatut
    typePayRun?: $Enums.TypePayRun
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayRunUpdateManyMutationInput = {
    periodeDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    periodeFin?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: EnumPayRunStatutFieldUpdateOperationsInput | $Enums.PayRunStatut
    typePayRun?: EnumTypePayRunFieldUpdateOperationsInput | $Enums.TypePayRun
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayRunUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    periodeDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    periodeFin?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: EnumPayRunStatutFieldUpdateOperationsInput | $Enums.PayRunStatut
    typePayRun?: EnumTypePayRunFieldUpdateOperationsInput | $Enums.TypePayRun
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContratCreateInput = {
    type: $Enums.TypeContrat
    salaireFixe?: Decimal | DecimalJsLike | number | string | null
    tauxJournalier?: Decimal | DecimalJsLike | number | string | null
    tauxHoraire?: Decimal | DecimalJsLike | number | string | null
    date_embauche: Date | string
    date_arret?: Date | string | null
    employe: EmployesCreateNestedOneWithoutContratInput
  }

  export type ContratUncheckedCreateInput = {
    id?: number
    employeId: number
    type: $Enums.TypeContrat
    salaireFixe?: Decimal | DecimalJsLike | number | string | null
    tauxJournalier?: Decimal | DecimalJsLike | number | string | null
    tauxHoraire?: Decimal | DecimalJsLike | number | string | null
    date_embauche: Date | string
    date_arret?: Date | string | null
  }

  export type ContratUpdateInput = {
    type?: EnumTypeContratFieldUpdateOperationsInput | $Enums.TypeContrat
    salaireFixe?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tauxJournalier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tauxHoraire?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_embauche?: DateTimeFieldUpdateOperationsInput | Date | string
    date_arret?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employe?: EmployesUpdateOneRequiredWithoutContratNestedInput
  }

  export type ContratUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeId?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeContratFieldUpdateOperationsInput | $Enums.TypeContrat
    salaireFixe?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tauxJournalier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tauxHoraire?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_embauche?: DateTimeFieldUpdateOperationsInput | Date | string
    date_arret?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContratCreateManyInput = {
    id?: number
    employeId: number
    type: $Enums.TypeContrat
    salaireFixe?: Decimal | DecimalJsLike | number | string | null
    tauxJournalier?: Decimal | DecimalJsLike | number | string | null
    tauxHoraire?: Decimal | DecimalJsLike | number | string | null
    date_embauche: Date | string
    date_arret?: Date | string | null
  }

  export type ContratUpdateManyMutationInput = {
    type?: EnumTypeContratFieldUpdateOperationsInput | $Enums.TypeContrat
    salaireFixe?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tauxJournalier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tauxHoraire?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_embauche?: DateTimeFieldUpdateOperationsInput | Date | string
    date_arret?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContratUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeId?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeContratFieldUpdateOperationsInput | $Enums.TypeContrat
    salaireFixe?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tauxJournalier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tauxHoraire?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_embauche?: DateTimeFieldUpdateOperationsInput | Date | string
    date_arret?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PointagesCreateInput = {
    date: Date | string
    entree: Date | string
    sortie: Date | string
    employe: EmployesCreateNestedOneWithoutPointageInput
  }

  export type PointagesUncheckedCreateInput = {
    id?: number
    employeId: number
    date: Date | string
    entree: Date | string
    sortie: Date | string
  }

  export type PointagesUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    entree?: DateTimeFieldUpdateOperationsInput | Date | string
    sortie?: DateTimeFieldUpdateOperationsInput | Date | string
    employe?: EmployesUpdateOneRequiredWithoutPointageNestedInput
  }

  export type PointagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    entree?: DateTimeFieldUpdateOperationsInput | Date | string
    sortie?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointagesCreateManyInput = {
    id?: number
    employeId: number
    date: Date | string
    entree: Date | string
    sortie: Date | string
  }

  export type PointagesUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    entree?: DateTimeFieldUpdateOperationsInput | Date | string
    sortie?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    entree?: DateTimeFieldUpdateOperationsInput | Date | string
    sortie?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementCreateInput = {
    montant: Decimal | DecimalJsLike | number | string
    mode: $Enums.ModePaiement
    statut: $Enums.StatutPaiement
    reference?: string | null
    date_paiement?: Date | string
    bulletin: BulletinsSalaireCreateNestedOneWithoutPaiementsInput
  }

  export type PaiementUncheckedCreateInput = {
    id?: number
    montant: Decimal | DecimalJsLike | number | string
    mode: $Enums.ModePaiement
    statut: $Enums.StatutPaiement
    reference?: string | null
    date_paiement?: Date | string
    bulletinId: number
  }

  export type PaiementUpdateInput = {
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mode?: EnumModePaiementFieldUpdateOperationsInput | $Enums.ModePaiement
    statut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    date_paiement?: DateTimeFieldUpdateOperationsInput | Date | string
    bulletin?: BulletinsSalaireUpdateOneRequiredWithoutPaiementsNestedInput
  }

  export type PaiementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mode?: EnumModePaiementFieldUpdateOperationsInput | $Enums.ModePaiement
    statut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    date_paiement?: DateTimeFieldUpdateOperationsInput | Date | string
    bulletinId?: IntFieldUpdateOperationsInput | number
  }

  export type PaiementCreateManyInput = {
    id?: number
    montant: Decimal | DecimalJsLike | number | string
    mode: $Enums.ModePaiement
    statut: $Enums.StatutPaiement
    reference?: string | null
    date_paiement?: Date | string
    bulletinId: number
  }

  export type PaiementUpdateManyMutationInput = {
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mode?: EnumModePaiementFieldUpdateOperationsInput | $Enums.ModePaiement
    statut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    date_paiement?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mode?: EnumModePaiementFieldUpdateOperationsInput | $Enums.ModePaiement
    statut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    date_paiement?: DateTimeFieldUpdateOperationsInput | Date | string
    bulletinId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumTypeContratFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeContrat | EnumTypeContratFieldRefInput<$PrismaModel>
    in?: $Enums.TypeContrat[]
    notIn?: $Enums.TypeContrat[]
    not?: NestedEnumTypeContratFilter<$PrismaModel> | $Enums.TypeContrat
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumStatutFilter<$PrismaModel = never> = {
    equals?: $Enums.Statut | EnumStatutFieldRefInput<$PrismaModel>
    in?: $Enums.Statut[]
    notIn?: $Enums.Statut[]
    not?: NestedEnumStatutFilter<$PrismaModel> | $Enums.Statut
  }

  export type BulletinsSalaireListRelationFilter = {
    every?: BulletinsSalaireWhereInput
    some?: BulletinsSalaireWhereInput
    none?: BulletinsSalaireWhereInput
  }

  export type ContratListRelationFilter = {
    every?: ContratWhereInput
    some?: ContratWhereInput
    none?: ContratWhereInput
  }

  export type PointagesListRelationFilter = {
    every?: PointagesWhereInput
    some?: PointagesWhereInput
    none?: PointagesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BulletinsSalaireOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContratOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PointagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployesOrderByRelevanceInput = {
    fields: EmployesOrderByRelevanceFieldEnum | EmployesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EmployesCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    poste?: SortOrder
    date_embauche?: SortOrder
    date_arret?: SortOrder
    typeContrat?: SortOrder
    role?: SortOrder
    statut?: SortOrder
  }

  export type EmployesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmployesMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    poste?: SortOrder
    date_embauche?: SortOrder
    date_arret?: SortOrder
    typeContrat?: SortOrder
    role?: SortOrder
    statut?: SortOrder
  }

  export type EmployesMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    poste?: SortOrder
    date_embauche?: SortOrder
    date_arret?: SortOrder
    typeContrat?: SortOrder
    role?: SortOrder
    statut?: SortOrder
  }

  export type EmployesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumTypeContratWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeContrat | EnumTypeContratFieldRefInput<$PrismaModel>
    in?: $Enums.TypeContrat[]
    notIn?: $Enums.TypeContrat[]
    not?: NestedEnumTypeContratWithAggregatesFilter<$PrismaModel> | $Enums.TypeContrat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeContratFilter<$PrismaModel>
    _max?: NestedEnumTypeContratFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumStatutWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Statut | EnumStatutFieldRefInput<$PrismaModel>
    in?: $Enums.Statut[]
    notIn?: $Enums.Statut[]
    not?: NestedEnumStatutWithAggregatesFilter<$PrismaModel> | $Enums.Statut
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutFilter<$PrismaModel>
    _max?: NestedEnumStatutFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type PayRunScalarRelationFilter = {
    is?: PayRunWhereInput
    isNot?: PayRunWhereInput
  }

  export type EmployesScalarRelationFilter = {
    is?: EmployesWhereInput
    isNot?: EmployesWhereInput
  }

  export type PaiementListRelationFilter = {
    every?: PaiementWhereInput
    some?: PaiementWhereInput
    none?: PaiementWhereInput
  }

  export type PaiementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BulletinsSalaireOrderByRelevanceInput = {
    fields: BulletinsSalaireOrderByRelevanceFieldEnum | BulletinsSalaireOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BulletinsSalaireCountOrderByAggregateInput = {
    id?: SortOrder
    mois?: SortOrder
    salaire_base?: SortOrder
    deductions?: SortOrder
    salaire_net?: SortOrder
    date_generation?: SortOrder
    payRunId?: SortOrder
    employeId?: SortOrder
  }

  export type BulletinsSalaireAvgOrderByAggregateInput = {
    id?: SortOrder
    salaire_base?: SortOrder
    deductions?: SortOrder
    salaire_net?: SortOrder
    payRunId?: SortOrder
    employeId?: SortOrder
  }

  export type BulletinsSalaireMaxOrderByAggregateInput = {
    id?: SortOrder
    mois?: SortOrder
    salaire_base?: SortOrder
    deductions?: SortOrder
    salaire_net?: SortOrder
    date_generation?: SortOrder
    payRunId?: SortOrder
    employeId?: SortOrder
  }

  export type BulletinsSalaireMinOrderByAggregateInput = {
    id?: SortOrder
    mois?: SortOrder
    salaire_base?: SortOrder
    deductions?: SortOrder
    salaire_net?: SortOrder
    date_generation?: SortOrder
    payRunId?: SortOrder
    employeId?: SortOrder
  }

  export type BulletinsSalaireSumOrderByAggregateInput = {
    id?: SortOrder
    salaire_base?: SortOrder
    deductions?: SortOrder
    salaire_net?: SortOrder
    payRunId?: SortOrder
    employeId?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumPayRunStatutFilter<$PrismaModel = never> = {
    equals?: $Enums.PayRunStatut | EnumPayRunStatutFieldRefInput<$PrismaModel>
    in?: $Enums.PayRunStatut[]
    notIn?: $Enums.PayRunStatut[]
    not?: NestedEnumPayRunStatutFilter<$PrismaModel> | $Enums.PayRunStatut
  }

  export type EnumTypePayRunFilter<$PrismaModel = never> = {
    equals?: $Enums.TypePayRun | EnumTypePayRunFieldRefInput<$PrismaModel>
    in?: $Enums.TypePayRun[]
    notIn?: $Enums.TypePayRun[]
    not?: NestedEnumTypePayRunFilter<$PrismaModel> | $Enums.TypePayRun
  }

  export type PayRunCountOrderByAggregateInput = {
    id?: SortOrder
    periodeDebut?: SortOrder
    periodeFin?: SortOrder
    statut?: SortOrder
    typePayRun?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayRunAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PayRunMaxOrderByAggregateInput = {
    id?: SortOrder
    periodeDebut?: SortOrder
    periodeFin?: SortOrder
    statut?: SortOrder
    typePayRun?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayRunMinOrderByAggregateInput = {
    id?: SortOrder
    periodeDebut?: SortOrder
    periodeFin?: SortOrder
    statut?: SortOrder
    typePayRun?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayRunSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumPayRunStatutWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayRunStatut | EnumPayRunStatutFieldRefInput<$PrismaModel>
    in?: $Enums.PayRunStatut[]
    notIn?: $Enums.PayRunStatut[]
    not?: NestedEnumPayRunStatutWithAggregatesFilter<$PrismaModel> | $Enums.PayRunStatut
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayRunStatutFilter<$PrismaModel>
    _max?: NestedEnumPayRunStatutFilter<$PrismaModel>
  }

  export type EnumTypePayRunWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypePayRun | EnumTypePayRunFieldRefInput<$PrismaModel>
    in?: $Enums.TypePayRun[]
    notIn?: $Enums.TypePayRun[]
    not?: NestedEnumTypePayRunWithAggregatesFilter<$PrismaModel> | $Enums.TypePayRun
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypePayRunFilter<$PrismaModel>
    _max?: NestedEnumTypePayRunFilter<$PrismaModel>
  }

  export type ContratCountOrderByAggregateInput = {
    id?: SortOrder
    employeId?: SortOrder
    type?: SortOrder
    salaireFixe?: SortOrder
    tauxJournalier?: SortOrder
    tauxHoraire?: SortOrder
    date_embauche?: SortOrder
    date_arret?: SortOrder
  }

  export type ContratAvgOrderByAggregateInput = {
    id?: SortOrder
    employeId?: SortOrder
    salaireFixe?: SortOrder
    tauxJournalier?: SortOrder
    tauxHoraire?: SortOrder
  }

  export type ContratMaxOrderByAggregateInput = {
    id?: SortOrder
    employeId?: SortOrder
    type?: SortOrder
    salaireFixe?: SortOrder
    tauxJournalier?: SortOrder
    tauxHoraire?: SortOrder
    date_embauche?: SortOrder
    date_arret?: SortOrder
  }

  export type ContratMinOrderByAggregateInput = {
    id?: SortOrder
    employeId?: SortOrder
    type?: SortOrder
    salaireFixe?: SortOrder
    tauxJournalier?: SortOrder
    tauxHoraire?: SortOrder
    date_embauche?: SortOrder
    date_arret?: SortOrder
  }

  export type ContratSumOrderByAggregateInput = {
    id?: SortOrder
    employeId?: SortOrder
    salaireFixe?: SortOrder
    tauxJournalier?: SortOrder
    tauxHoraire?: SortOrder
  }

  export type PointagesCountOrderByAggregateInput = {
    id?: SortOrder
    employeId?: SortOrder
    date?: SortOrder
    entree?: SortOrder
    sortie?: SortOrder
  }

  export type PointagesAvgOrderByAggregateInput = {
    id?: SortOrder
    employeId?: SortOrder
  }

  export type PointagesMaxOrderByAggregateInput = {
    id?: SortOrder
    employeId?: SortOrder
    date?: SortOrder
    entree?: SortOrder
    sortie?: SortOrder
  }

  export type PointagesMinOrderByAggregateInput = {
    id?: SortOrder
    employeId?: SortOrder
    date?: SortOrder
    entree?: SortOrder
    sortie?: SortOrder
  }

  export type PointagesSumOrderByAggregateInput = {
    id?: SortOrder
    employeId?: SortOrder
  }

  export type EnumModePaiementFilter<$PrismaModel = never> = {
    equals?: $Enums.ModePaiement | EnumModePaiementFieldRefInput<$PrismaModel>
    in?: $Enums.ModePaiement[]
    notIn?: $Enums.ModePaiement[]
    not?: NestedEnumModePaiementFilter<$PrismaModel> | $Enums.ModePaiement
  }

  export type EnumStatutPaiementFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutPaiement | EnumStatutPaiementFieldRefInput<$PrismaModel>
    in?: $Enums.StatutPaiement[]
    notIn?: $Enums.StatutPaiement[]
    not?: NestedEnumStatutPaiementFilter<$PrismaModel> | $Enums.StatutPaiement
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BulletinsSalaireScalarRelationFilter = {
    is?: BulletinsSalaireWhereInput
    isNot?: BulletinsSalaireWhereInput
  }

  export type PaiementOrderByRelevanceInput = {
    fields: PaiementOrderByRelevanceFieldEnum | PaiementOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaiementCountOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    mode?: SortOrder
    statut?: SortOrder
    reference?: SortOrder
    date_paiement?: SortOrder
    bulletinId?: SortOrder
  }

  export type PaiementAvgOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    bulletinId?: SortOrder
  }

  export type PaiementMaxOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    mode?: SortOrder
    statut?: SortOrder
    reference?: SortOrder
    date_paiement?: SortOrder
    bulletinId?: SortOrder
  }

  export type PaiementMinOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    mode?: SortOrder
    statut?: SortOrder
    reference?: SortOrder
    date_paiement?: SortOrder
    bulletinId?: SortOrder
  }

  export type PaiementSumOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    bulletinId?: SortOrder
  }

  export type EnumModePaiementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModePaiement | EnumModePaiementFieldRefInput<$PrismaModel>
    in?: $Enums.ModePaiement[]
    notIn?: $Enums.ModePaiement[]
    not?: NestedEnumModePaiementWithAggregatesFilter<$PrismaModel> | $Enums.ModePaiement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModePaiementFilter<$PrismaModel>
    _max?: NestedEnumModePaiementFilter<$PrismaModel>
  }

  export type EnumStatutPaiementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutPaiement | EnumStatutPaiementFieldRefInput<$PrismaModel>
    in?: $Enums.StatutPaiement[]
    notIn?: $Enums.StatutPaiement[]
    not?: NestedEnumStatutPaiementWithAggregatesFilter<$PrismaModel> | $Enums.StatutPaiement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutPaiementFilter<$PrismaModel>
    _max?: NestedEnumStatutPaiementFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BulletinsSalaireCreateNestedManyWithoutEmployeInput = {
    create?: XOR<BulletinsSalaireCreateWithoutEmployeInput, BulletinsSalaireUncheckedCreateWithoutEmployeInput> | BulletinsSalaireCreateWithoutEmployeInput[] | BulletinsSalaireUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: BulletinsSalaireCreateOrConnectWithoutEmployeInput | BulletinsSalaireCreateOrConnectWithoutEmployeInput[]
    createMany?: BulletinsSalaireCreateManyEmployeInputEnvelope
    connect?: BulletinsSalaireWhereUniqueInput | BulletinsSalaireWhereUniqueInput[]
  }

  export type ContratCreateNestedManyWithoutEmployeInput = {
    create?: XOR<ContratCreateWithoutEmployeInput, ContratUncheckedCreateWithoutEmployeInput> | ContratCreateWithoutEmployeInput[] | ContratUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: ContratCreateOrConnectWithoutEmployeInput | ContratCreateOrConnectWithoutEmployeInput[]
    createMany?: ContratCreateManyEmployeInputEnvelope
    connect?: ContratWhereUniqueInput | ContratWhereUniqueInput[]
  }

  export type PointagesCreateNestedManyWithoutEmployeInput = {
    create?: XOR<PointagesCreateWithoutEmployeInput, PointagesUncheckedCreateWithoutEmployeInput> | PointagesCreateWithoutEmployeInput[] | PointagesUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: PointagesCreateOrConnectWithoutEmployeInput | PointagesCreateOrConnectWithoutEmployeInput[]
    createMany?: PointagesCreateManyEmployeInputEnvelope
    connect?: PointagesWhereUniqueInput | PointagesWhereUniqueInput[]
  }

  export type BulletinsSalaireUncheckedCreateNestedManyWithoutEmployeInput = {
    create?: XOR<BulletinsSalaireCreateWithoutEmployeInput, BulletinsSalaireUncheckedCreateWithoutEmployeInput> | BulletinsSalaireCreateWithoutEmployeInput[] | BulletinsSalaireUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: BulletinsSalaireCreateOrConnectWithoutEmployeInput | BulletinsSalaireCreateOrConnectWithoutEmployeInput[]
    createMany?: BulletinsSalaireCreateManyEmployeInputEnvelope
    connect?: BulletinsSalaireWhereUniqueInput | BulletinsSalaireWhereUniqueInput[]
  }

  export type ContratUncheckedCreateNestedManyWithoutEmployeInput = {
    create?: XOR<ContratCreateWithoutEmployeInput, ContratUncheckedCreateWithoutEmployeInput> | ContratCreateWithoutEmployeInput[] | ContratUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: ContratCreateOrConnectWithoutEmployeInput | ContratCreateOrConnectWithoutEmployeInput[]
    createMany?: ContratCreateManyEmployeInputEnvelope
    connect?: ContratWhereUniqueInput | ContratWhereUniqueInput[]
  }

  export type PointagesUncheckedCreateNestedManyWithoutEmployeInput = {
    create?: XOR<PointagesCreateWithoutEmployeInput, PointagesUncheckedCreateWithoutEmployeInput> | PointagesCreateWithoutEmployeInput[] | PointagesUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: PointagesCreateOrConnectWithoutEmployeInput | PointagesCreateOrConnectWithoutEmployeInput[]
    createMany?: PointagesCreateManyEmployeInputEnvelope
    connect?: PointagesWhereUniqueInput | PointagesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumTypeContratFieldUpdateOperationsInput = {
    set?: $Enums.TypeContrat
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumStatutFieldUpdateOperationsInput = {
    set?: $Enums.Statut
  }

  export type BulletinsSalaireUpdateManyWithoutEmployeNestedInput = {
    create?: XOR<BulletinsSalaireCreateWithoutEmployeInput, BulletinsSalaireUncheckedCreateWithoutEmployeInput> | BulletinsSalaireCreateWithoutEmployeInput[] | BulletinsSalaireUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: BulletinsSalaireCreateOrConnectWithoutEmployeInput | BulletinsSalaireCreateOrConnectWithoutEmployeInput[]
    upsert?: BulletinsSalaireUpsertWithWhereUniqueWithoutEmployeInput | BulletinsSalaireUpsertWithWhereUniqueWithoutEmployeInput[]
    createMany?: BulletinsSalaireCreateManyEmployeInputEnvelope
    set?: BulletinsSalaireWhereUniqueInput | BulletinsSalaireWhereUniqueInput[]
    disconnect?: BulletinsSalaireWhereUniqueInput | BulletinsSalaireWhereUniqueInput[]
    delete?: BulletinsSalaireWhereUniqueInput | BulletinsSalaireWhereUniqueInput[]
    connect?: BulletinsSalaireWhereUniqueInput | BulletinsSalaireWhereUniqueInput[]
    update?: BulletinsSalaireUpdateWithWhereUniqueWithoutEmployeInput | BulletinsSalaireUpdateWithWhereUniqueWithoutEmployeInput[]
    updateMany?: BulletinsSalaireUpdateManyWithWhereWithoutEmployeInput | BulletinsSalaireUpdateManyWithWhereWithoutEmployeInput[]
    deleteMany?: BulletinsSalaireScalarWhereInput | BulletinsSalaireScalarWhereInput[]
  }

  export type ContratUpdateManyWithoutEmployeNestedInput = {
    create?: XOR<ContratCreateWithoutEmployeInput, ContratUncheckedCreateWithoutEmployeInput> | ContratCreateWithoutEmployeInput[] | ContratUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: ContratCreateOrConnectWithoutEmployeInput | ContratCreateOrConnectWithoutEmployeInput[]
    upsert?: ContratUpsertWithWhereUniqueWithoutEmployeInput | ContratUpsertWithWhereUniqueWithoutEmployeInput[]
    createMany?: ContratCreateManyEmployeInputEnvelope
    set?: ContratWhereUniqueInput | ContratWhereUniqueInput[]
    disconnect?: ContratWhereUniqueInput | ContratWhereUniqueInput[]
    delete?: ContratWhereUniqueInput | ContratWhereUniqueInput[]
    connect?: ContratWhereUniqueInput | ContratWhereUniqueInput[]
    update?: ContratUpdateWithWhereUniqueWithoutEmployeInput | ContratUpdateWithWhereUniqueWithoutEmployeInput[]
    updateMany?: ContratUpdateManyWithWhereWithoutEmployeInput | ContratUpdateManyWithWhereWithoutEmployeInput[]
    deleteMany?: ContratScalarWhereInput | ContratScalarWhereInput[]
  }

  export type PointagesUpdateManyWithoutEmployeNestedInput = {
    create?: XOR<PointagesCreateWithoutEmployeInput, PointagesUncheckedCreateWithoutEmployeInput> | PointagesCreateWithoutEmployeInput[] | PointagesUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: PointagesCreateOrConnectWithoutEmployeInput | PointagesCreateOrConnectWithoutEmployeInput[]
    upsert?: PointagesUpsertWithWhereUniqueWithoutEmployeInput | PointagesUpsertWithWhereUniqueWithoutEmployeInput[]
    createMany?: PointagesCreateManyEmployeInputEnvelope
    set?: PointagesWhereUniqueInput | PointagesWhereUniqueInput[]
    disconnect?: PointagesWhereUniqueInput | PointagesWhereUniqueInput[]
    delete?: PointagesWhereUniqueInput | PointagesWhereUniqueInput[]
    connect?: PointagesWhereUniqueInput | PointagesWhereUniqueInput[]
    update?: PointagesUpdateWithWhereUniqueWithoutEmployeInput | PointagesUpdateWithWhereUniqueWithoutEmployeInput[]
    updateMany?: PointagesUpdateManyWithWhereWithoutEmployeInput | PointagesUpdateManyWithWhereWithoutEmployeInput[]
    deleteMany?: PointagesScalarWhereInput | PointagesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BulletinsSalaireUncheckedUpdateManyWithoutEmployeNestedInput = {
    create?: XOR<BulletinsSalaireCreateWithoutEmployeInput, BulletinsSalaireUncheckedCreateWithoutEmployeInput> | BulletinsSalaireCreateWithoutEmployeInput[] | BulletinsSalaireUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: BulletinsSalaireCreateOrConnectWithoutEmployeInput | BulletinsSalaireCreateOrConnectWithoutEmployeInput[]
    upsert?: BulletinsSalaireUpsertWithWhereUniqueWithoutEmployeInput | BulletinsSalaireUpsertWithWhereUniqueWithoutEmployeInput[]
    createMany?: BulletinsSalaireCreateManyEmployeInputEnvelope
    set?: BulletinsSalaireWhereUniqueInput | BulletinsSalaireWhereUniqueInput[]
    disconnect?: BulletinsSalaireWhereUniqueInput | BulletinsSalaireWhereUniqueInput[]
    delete?: BulletinsSalaireWhereUniqueInput | BulletinsSalaireWhereUniqueInput[]
    connect?: BulletinsSalaireWhereUniqueInput | BulletinsSalaireWhereUniqueInput[]
    update?: BulletinsSalaireUpdateWithWhereUniqueWithoutEmployeInput | BulletinsSalaireUpdateWithWhereUniqueWithoutEmployeInput[]
    updateMany?: BulletinsSalaireUpdateManyWithWhereWithoutEmployeInput | BulletinsSalaireUpdateManyWithWhereWithoutEmployeInput[]
    deleteMany?: BulletinsSalaireScalarWhereInput | BulletinsSalaireScalarWhereInput[]
  }

  export type ContratUncheckedUpdateManyWithoutEmployeNestedInput = {
    create?: XOR<ContratCreateWithoutEmployeInput, ContratUncheckedCreateWithoutEmployeInput> | ContratCreateWithoutEmployeInput[] | ContratUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: ContratCreateOrConnectWithoutEmployeInput | ContratCreateOrConnectWithoutEmployeInput[]
    upsert?: ContratUpsertWithWhereUniqueWithoutEmployeInput | ContratUpsertWithWhereUniqueWithoutEmployeInput[]
    createMany?: ContratCreateManyEmployeInputEnvelope
    set?: ContratWhereUniqueInput | ContratWhereUniqueInput[]
    disconnect?: ContratWhereUniqueInput | ContratWhereUniqueInput[]
    delete?: ContratWhereUniqueInput | ContratWhereUniqueInput[]
    connect?: ContratWhereUniqueInput | ContratWhereUniqueInput[]
    update?: ContratUpdateWithWhereUniqueWithoutEmployeInput | ContratUpdateWithWhereUniqueWithoutEmployeInput[]
    updateMany?: ContratUpdateManyWithWhereWithoutEmployeInput | ContratUpdateManyWithWhereWithoutEmployeInput[]
    deleteMany?: ContratScalarWhereInput | ContratScalarWhereInput[]
  }

  export type PointagesUncheckedUpdateManyWithoutEmployeNestedInput = {
    create?: XOR<PointagesCreateWithoutEmployeInput, PointagesUncheckedCreateWithoutEmployeInput> | PointagesCreateWithoutEmployeInput[] | PointagesUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: PointagesCreateOrConnectWithoutEmployeInput | PointagesCreateOrConnectWithoutEmployeInput[]
    upsert?: PointagesUpsertWithWhereUniqueWithoutEmployeInput | PointagesUpsertWithWhereUniqueWithoutEmployeInput[]
    createMany?: PointagesCreateManyEmployeInputEnvelope
    set?: PointagesWhereUniqueInput | PointagesWhereUniqueInput[]
    disconnect?: PointagesWhereUniqueInput | PointagesWhereUniqueInput[]
    delete?: PointagesWhereUniqueInput | PointagesWhereUniqueInput[]
    connect?: PointagesWhereUniqueInput | PointagesWhereUniqueInput[]
    update?: PointagesUpdateWithWhereUniqueWithoutEmployeInput | PointagesUpdateWithWhereUniqueWithoutEmployeInput[]
    updateMany?: PointagesUpdateManyWithWhereWithoutEmployeInput | PointagesUpdateManyWithWhereWithoutEmployeInput[]
    deleteMany?: PointagesScalarWhereInput | PointagesScalarWhereInput[]
  }

  export type PayRunCreateNestedOneWithoutBulletinsInput = {
    create?: XOR<PayRunCreateWithoutBulletinsInput, PayRunUncheckedCreateWithoutBulletinsInput>
    connectOrCreate?: PayRunCreateOrConnectWithoutBulletinsInput
    connect?: PayRunWhereUniqueInput
  }

  export type EmployesCreateNestedOneWithoutBulletinsInput = {
    create?: XOR<EmployesCreateWithoutBulletinsInput, EmployesUncheckedCreateWithoutBulletinsInput>
    connectOrCreate?: EmployesCreateOrConnectWithoutBulletinsInput
    connect?: EmployesWhereUniqueInput
  }

  export type PaiementCreateNestedManyWithoutBulletinInput = {
    create?: XOR<PaiementCreateWithoutBulletinInput, PaiementUncheckedCreateWithoutBulletinInput> | PaiementCreateWithoutBulletinInput[] | PaiementUncheckedCreateWithoutBulletinInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutBulletinInput | PaiementCreateOrConnectWithoutBulletinInput[]
    createMany?: PaiementCreateManyBulletinInputEnvelope
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
  }

  export type PaiementUncheckedCreateNestedManyWithoutBulletinInput = {
    create?: XOR<PaiementCreateWithoutBulletinInput, PaiementUncheckedCreateWithoutBulletinInput> | PaiementCreateWithoutBulletinInput[] | PaiementUncheckedCreateWithoutBulletinInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutBulletinInput | PaiementCreateOrConnectWithoutBulletinInput[]
    createMany?: PaiementCreateManyBulletinInputEnvelope
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type PayRunUpdateOneRequiredWithoutBulletinsNestedInput = {
    create?: XOR<PayRunCreateWithoutBulletinsInput, PayRunUncheckedCreateWithoutBulletinsInput>
    connectOrCreate?: PayRunCreateOrConnectWithoutBulletinsInput
    upsert?: PayRunUpsertWithoutBulletinsInput
    connect?: PayRunWhereUniqueInput
    update?: XOR<XOR<PayRunUpdateToOneWithWhereWithoutBulletinsInput, PayRunUpdateWithoutBulletinsInput>, PayRunUncheckedUpdateWithoutBulletinsInput>
  }

  export type EmployesUpdateOneRequiredWithoutBulletinsNestedInput = {
    create?: XOR<EmployesCreateWithoutBulletinsInput, EmployesUncheckedCreateWithoutBulletinsInput>
    connectOrCreate?: EmployesCreateOrConnectWithoutBulletinsInput
    upsert?: EmployesUpsertWithoutBulletinsInput
    connect?: EmployesWhereUniqueInput
    update?: XOR<XOR<EmployesUpdateToOneWithWhereWithoutBulletinsInput, EmployesUpdateWithoutBulletinsInput>, EmployesUncheckedUpdateWithoutBulletinsInput>
  }

  export type PaiementUpdateManyWithoutBulletinNestedInput = {
    create?: XOR<PaiementCreateWithoutBulletinInput, PaiementUncheckedCreateWithoutBulletinInput> | PaiementCreateWithoutBulletinInput[] | PaiementUncheckedCreateWithoutBulletinInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutBulletinInput | PaiementCreateOrConnectWithoutBulletinInput[]
    upsert?: PaiementUpsertWithWhereUniqueWithoutBulletinInput | PaiementUpsertWithWhereUniqueWithoutBulletinInput[]
    createMany?: PaiementCreateManyBulletinInputEnvelope
    set?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    disconnect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    delete?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    update?: PaiementUpdateWithWhereUniqueWithoutBulletinInput | PaiementUpdateWithWhereUniqueWithoutBulletinInput[]
    updateMany?: PaiementUpdateManyWithWhereWithoutBulletinInput | PaiementUpdateManyWithWhereWithoutBulletinInput[]
    deleteMany?: PaiementScalarWhereInput | PaiementScalarWhereInput[]
  }

  export type PaiementUncheckedUpdateManyWithoutBulletinNestedInput = {
    create?: XOR<PaiementCreateWithoutBulletinInput, PaiementUncheckedCreateWithoutBulletinInput> | PaiementCreateWithoutBulletinInput[] | PaiementUncheckedCreateWithoutBulletinInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutBulletinInput | PaiementCreateOrConnectWithoutBulletinInput[]
    upsert?: PaiementUpsertWithWhereUniqueWithoutBulletinInput | PaiementUpsertWithWhereUniqueWithoutBulletinInput[]
    createMany?: PaiementCreateManyBulletinInputEnvelope
    set?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    disconnect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    delete?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    update?: PaiementUpdateWithWhereUniqueWithoutBulletinInput | PaiementUpdateWithWhereUniqueWithoutBulletinInput[]
    updateMany?: PaiementUpdateManyWithWhereWithoutBulletinInput | PaiementUpdateManyWithWhereWithoutBulletinInput[]
    deleteMany?: PaiementScalarWhereInput | PaiementScalarWhereInput[]
  }

  export type BulletinsSalaireCreateNestedManyWithoutPayRunInput = {
    create?: XOR<BulletinsSalaireCreateWithoutPayRunInput, BulletinsSalaireUncheckedCreateWithoutPayRunInput> | BulletinsSalaireCreateWithoutPayRunInput[] | BulletinsSalaireUncheckedCreateWithoutPayRunInput[]
    connectOrCreate?: BulletinsSalaireCreateOrConnectWithoutPayRunInput | BulletinsSalaireCreateOrConnectWithoutPayRunInput[]
    createMany?: BulletinsSalaireCreateManyPayRunInputEnvelope
    connect?: BulletinsSalaireWhereUniqueInput | BulletinsSalaireWhereUniqueInput[]
  }

  export type BulletinsSalaireUncheckedCreateNestedManyWithoutPayRunInput = {
    create?: XOR<BulletinsSalaireCreateWithoutPayRunInput, BulletinsSalaireUncheckedCreateWithoutPayRunInput> | BulletinsSalaireCreateWithoutPayRunInput[] | BulletinsSalaireUncheckedCreateWithoutPayRunInput[]
    connectOrCreate?: BulletinsSalaireCreateOrConnectWithoutPayRunInput | BulletinsSalaireCreateOrConnectWithoutPayRunInput[]
    createMany?: BulletinsSalaireCreateManyPayRunInputEnvelope
    connect?: BulletinsSalaireWhereUniqueInput | BulletinsSalaireWhereUniqueInput[]
  }

  export type EnumPayRunStatutFieldUpdateOperationsInput = {
    set?: $Enums.PayRunStatut
  }

  export type EnumTypePayRunFieldUpdateOperationsInput = {
    set?: $Enums.TypePayRun
  }

  export type BulletinsSalaireUpdateManyWithoutPayRunNestedInput = {
    create?: XOR<BulletinsSalaireCreateWithoutPayRunInput, BulletinsSalaireUncheckedCreateWithoutPayRunInput> | BulletinsSalaireCreateWithoutPayRunInput[] | BulletinsSalaireUncheckedCreateWithoutPayRunInput[]
    connectOrCreate?: BulletinsSalaireCreateOrConnectWithoutPayRunInput | BulletinsSalaireCreateOrConnectWithoutPayRunInput[]
    upsert?: BulletinsSalaireUpsertWithWhereUniqueWithoutPayRunInput | BulletinsSalaireUpsertWithWhereUniqueWithoutPayRunInput[]
    createMany?: BulletinsSalaireCreateManyPayRunInputEnvelope
    set?: BulletinsSalaireWhereUniqueInput | BulletinsSalaireWhereUniqueInput[]
    disconnect?: BulletinsSalaireWhereUniqueInput | BulletinsSalaireWhereUniqueInput[]
    delete?: BulletinsSalaireWhereUniqueInput | BulletinsSalaireWhereUniqueInput[]
    connect?: BulletinsSalaireWhereUniqueInput | BulletinsSalaireWhereUniqueInput[]
    update?: BulletinsSalaireUpdateWithWhereUniqueWithoutPayRunInput | BulletinsSalaireUpdateWithWhereUniqueWithoutPayRunInput[]
    updateMany?: BulletinsSalaireUpdateManyWithWhereWithoutPayRunInput | BulletinsSalaireUpdateManyWithWhereWithoutPayRunInput[]
    deleteMany?: BulletinsSalaireScalarWhereInput | BulletinsSalaireScalarWhereInput[]
  }

  export type BulletinsSalaireUncheckedUpdateManyWithoutPayRunNestedInput = {
    create?: XOR<BulletinsSalaireCreateWithoutPayRunInput, BulletinsSalaireUncheckedCreateWithoutPayRunInput> | BulletinsSalaireCreateWithoutPayRunInput[] | BulletinsSalaireUncheckedCreateWithoutPayRunInput[]
    connectOrCreate?: BulletinsSalaireCreateOrConnectWithoutPayRunInput | BulletinsSalaireCreateOrConnectWithoutPayRunInput[]
    upsert?: BulletinsSalaireUpsertWithWhereUniqueWithoutPayRunInput | BulletinsSalaireUpsertWithWhereUniqueWithoutPayRunInput[]
    createMany?: BulletinsSalaireCreateManyPayRunInputEnvelope
    set?: BulletinsSalaireWhereUniqueInput | BulletinsSalaireWhereUniqueInput[]
    disconnect?: BulletinsSalaireWhereUniqueInput | BulletinsSalaireWhereUniqueInput[]
    delete?: BulletinsSalaireWhereUniqueInput | BulletinsSalaireWhereUniqueInput[]
    connect?: BulletinsSalaireWhereUniqueInput | BulletinsSalaireWhereUniqueInput[]
    update?: BulletinsSalaireUpdateWithWhereUniqueWithoutPayRunInput | BulletinsSalaireUpdateWithWhereUniqueWithoutPayRunInput[]
    updateMany?: BulletinsSalaireUpdateManyWithWhereWithoutPayRunInput | BulletinsSalaireUpdateManyWithWhereWithoutPayRunInput[]
    deleteMany?: BulletinsSalaireScalarWhereInput | BulletinsSalaireScalarWhereInput[]
  }

  export type EmployesCreateNestedOneWithoutContratInput = {
    create?: XOR<EmployesCreateWithoutContratInput, EmployesUncheckedCreateWithoutContratInput>
    connectOrCreate?: EmployesCreateOrConnectWithoutContratInput
    connect?: EmployesWhereUniqueInput
  }

  export type EmployesUpdateOneRequiredWithoutContratNestedInput = {
    create?: XOR<EmployesCreateWithoutContratInput, EmployesUncheckedCreateWithoutContratInput>
    connectOrCreate?: EmployesCreateOrConnectWithoutContratInput
    upsert?: EmployesUpsertWithoutContratInput
    connect?: EmployesWhereUniqueInput
    update?: XOR<XOR<EmployesUpdateToOneWithWhereWithoutContratInput, EmployesUpdateWithoutContratInput>, EmployesUncheckedUpdateWithoutContratInput>
  }

  export type EmployesCreateNestedOneWithoutPointageInput = {
    create?: XOR<EmployesCreateWithoutPointageInput, EmployesUncheckedCreateWithoutPointageInput>
    connectOrCreate?: EmployesCreateOrConnectWithoutPointageInput
    connect?: EmployesWhereUniqueInput
  }

  export type EmployesUpdateOneRequiredWithoutPointageNestedInput = {
    create?: XOR<EmployesCreateWithoutPointageInput, EmployesUncheckedCreateWithoutPointageInput>
    connectOrCreate?: EmployesCreateOrConnectWithoutPointageInput
    upsert?: EmployesUpsertWithoutPointageInput
    connect?: EmployesWhereUniqueInput
    update?: XOR<XOR<EmployesUpdateToOneWithWhereWithoutPointageInput, EmployesUpdateWithoutPointageInput>, EmployesUncheckedUpdateWithoutPointageInput>
  }

  export type BulletinsSalaireCreateNestedOneWithoutPaiementsInput = {
    create?: XOR<BulletinsSalaireCreateWithoutPaiementsInput, BulletinsSalaireUncheckedCreateWithoutPaiementsInput>
    connectOrCreate?: BulletinsSalaireCreateOrConnectWithoutPaiementsInput
    connect?: BulletinsSalaireWhereUniqueInput
  }

  export type EnumModePaiementFieldUpdateOperationsInput = {
    set?: $Enums.ModePaiement
  }

  export type EnumStatutPaiementFieldUpdateOperationsInput = {
    set?: $Enums.StatutPaiement
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BulletinsSalaireUpdateOneRequiredWithoutPaiementsNestedInput = {
    create?: XOR<BulletinsSalaireCreateWithoutPaiementsInput, BulletinsSalaireUncheckedCreateWithoutPaiementsInput>
    connectOrCreate?: BulletinsSalaireCreateOrConnectWithoutPaiementsInput
    upsert?: BulletinsSalaireUpsertWithoutPaiementsInput
    connect?: BulletinsSalaireWhereUniqueInput
    update?: XOR<XOR<BulletinsSalaireUpdateToOneWithWhereWithoutPaiementsInput, BulletinsSalaireUpdateWithoutPaiementsInput>, BulletinsSalaireUncheckedUpdateWithoutPaiementsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumTypeContratFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeContrat | EnumTypeContratFieldRefInput<$PrismaModel>
    in?: $Enums.TypeContrat[]
    notIn?: $Enums.TypeContrat[]
    not?: NestedEnumTypeContratFilter<$PrismaModel> | $Enums.TypeContrat
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumStatutFilter<$PrismaModel = never> = {
    equals?: $Enums.Statut | EnumStatutFieldRefInput<$PrismaModel>
    in?: $Enums.Statut[]
    notIn?: $Enums.Statut[]
    not?: NestedEnumStatutFilter<$PrismaModel> | $Enums.Statut
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTypeContratWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeContrat | EnumTypeContratFieldRefInput<$PrismaModel>
    in?: $Enums.TypeContrat[]
    notIn?: $Enums.TypeContrat[]
    not?: NestedEnumTypeContratWithAggregatesFilter<$PrismaModel> | $Enums.TypeContrat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeContratFilter<$PrismaModel>
    _max?: NestedEnumTypeContratFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumStatutWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Statut | EnumStatutFieldRefInput<$PrismaModel>
    in?: $Enums.Statut[]
    notIn?: $Enums.Statut[]
    not?: NestedEnumStatutWithAggregatesFilter<$PrismaModel> | $Enums.Statut
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutFilter<$PrismaModel>
    _max?: NestedEnumStatutFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumPayRunStatutFilter<$PrismaModel = never> = {
    equals?: $Enums.PayRunStatut | EnumPayRunStatutFieldRefInput<$PrismaModel>
    in?: $Enums.PayRunStatut[]
    notIn?: $Enums.PayRunStatut[]
    not?: NestedEnumPayRunStatutFilter<$PrismaModel> | $Enums.PayRunStatut
  }

  export type NestedEnumTypePayRunFilter<$PrismaModel = never> = {
    equals?: $Enums.TypePayRun | EnumTypePayRunFieldRefInput<$PrismaModel>
    in?: $Enums.TypePayRun[]
    notIn?: $Enums.TypePayRun[]
    not?: NestedEnumTypePayRunFilter<$PrismaModel> | $Enums.TypePayRun
  }

  export type NestedEnumPayRunStatutWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayRunStatut | EnumPayRunStatutFieldRefInput<$PrismaModel>
    in?: $Enums.PayRunStatut[]
    notIn?: $Enums.PayRunStatut[]
    not?: NestedEnumPayRunStatutWithAggregatesFilter<$PrismaModel> | $Enums.PayRunStatut
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayRunStatutFilter<$PrismaModel>
    _max?: NestedEnumPayRunStatutFilter<$PrismaModel>
  }

  export type NestedEnumTypePayRunWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypePayRun | EnumTypePayRunFieldRefInput<$PrismaModel>
    in?: $Enums.TypePayRun[]
    notIn?: $Enums.TypePayRun[]
    not?: NestedEnumTypePayRunWithAggregatesFilter<$PrismaModel> | $Enums.TypePayRun
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypePayRunFilter<$PrismaModel>
    _max?: NestedEnumTypePayRunFilter<$PrismaModel>
  }

  export type NestedEnumModePaiementFilter<$PrismaModel = never> = {
    equals?: $Enums.ModePaiement | EnumModePaiementFieldRefInput<$PrismaModel>
    in?: $Enums.ModePaiement[]
    notIn?: $Enums.ModePaiement[]
    not?: NestedEnumModePaiementFilter<$PrismaModel> | $Enums.ModePaiement
  }

  export type NestedEnumStatutPaiementFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutPaiement | EnumStatutPaiementFieldRefInput<$PrismaModel>
    in?: $Enums.StatutPaiement[]
    notIn?: $Enums.StatutPaiement[]
    not?: NestedEnumStatutPaiementFilter<$PrismaModel> | $Enums.StatutPaiement
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumModePaiementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModePaiement | EnumModePaiementFieldRefInput<$PrismaModel>
    in?: $Enums.ModePaiement[]
    notIn?: $Enums.ModePaiement[]
    not?: NestedEnumModePaiementWithAggregatesFilter<$PrismaModel> | $Enums.ModePaiement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModePaiementFilter<$PrismaModel>
    _max?: NestedEnumModePaiementFilter<$PrismaModel>
  }

  export type NestedEnumStatutPaiementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutPaiement | EnumStatutPaiementFieldRefInput<$PrismaModel>
    in?: $Enums.StatutPaiement[]
    notIn?: $Enums.StatutPaiement[]
    not?: NestedEnumStatutPaiementWithAggregatesFilter<$PrismaModel> | $Enums.StatutPaiement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutPaiementFilter<$PrismaModel>
    _max?: NestedEnumStatutPaiementFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BulletinsSalaireCreateWithoutEmployeInput = {
    mois: string
    salaire_base?: Decimal | DecimalJsLike | number | string | null
    deductions?: Decimal | DecimalJsLike | number | string
    salaire_net: Decimal | DecimalJsLike | number | string
    date_generation?: Date | string
    payRun: PayRunCreateNestedOneWithoutBulletinsInput
    paiements?: PaiementCreateNestedManyWithoutBulletinInput
  }

  export type BulletinsSalaireUncheckedCreateWithoutEmployeInput = {
    id?: number
    mois: string
    salaire_base?: Decimal | DecimalJsLike | number | string | null
    deductions?: Decimal | DecimalJsLike | number | string
    salaire_net: Decimal | DecimalJsLike | number | string
    date_generation?: Date | string
    payRunId: number
    paiements?: PaiementUncheckedCreateNestedManyWithoutBulletinInput
  }

  export type BulletinsSalaireCreateOrConnectWithoutEmployeInput = {
    where: BulletinsSalaireWhereUniqueInput
    create: XOR<BulletinsSalaireCreateWithoutEmployeInput, BulletinsSalaireUncheckedCreateWithoutEmployeInput>
  }

  export type BulletinsSalaireCreateManyEmployeInputEnvelope = {
    data: BulletinsSalaireCreateManyEmployeInput | BulletinsSalaireCreateManyEmployeInput[]
    skipDuplicates?: boolean
  }

  export type ContratCreateWithoutEmployeInput = {
    type: $Enums.TypeContrat
    salaireFixe?: Decimal | DecimalJsLike | number | string | null
    tauxJournalier?: Decimal | DecimalJsLike | number | string | null
    tauxHoraire?: Decimal | DecimalJsLike | number | string | null
    date_embauche: Date | string
    date_arret?: Date | string | null
  }

  export type ContratUncheckedCreateWithoutEmployeInput = {
    id?: number
    type: $Enums.TypeContrat
    salaireFixe?: Decimal | DecimalJsLike | number | string | null
    tauxJournalier?: Decimal | DecimalJsLike | number | string | null
    tauxHoraire?: Decimal | DecimalJsLike | number | string | null
    date_embauche: Date | string
    date_arret?: Date | string | null
  }

  export type ContratCreateOrConnectWithoutEmployeInput = {
    where: ContratWhereUniqueInput
    create: XOR<ContratCreateWithoutEmployeInput, ContratUncheckedCreateWithoutEmployeInput>
  }

  export type ContratCreateManyEmployeInputEnvelope = {
    data: ContratCreateManyEmployeInput | ContratCreateManyEmployeInput[]
    skipDuplicates?: boolean
  }

  export type PointagesCreateWithoutEmployeInput = {
    date: Date | string
    entree: Date | string
    sortie: Date | string
  }

  export type PointagesUncheckedCreateWithoutEmployeInput = {
    id?: number
    date: Date | string
    entree: Date | string
    sortie: Date | string
  }

  export type PointagesCreateOrConnectWithoutEmployeInput = {
    where: PointagesWhereUniqueInput
    create: XOR<PointagesCreateWithoutEmployeInput, PointagesUncheckedCreateWithoutEmployeInput>
  }

  export type PointagesCreateManyEmployeInputEnvelope = {
    data: PointagesCreateManyEmployeInput | PointagesCreateManyEmployeInput[]
    skipDuplicates?: boolean
  }

  export type BulletinsSalaireUpsertWithWhereUniqueWithoutEmployeInput = {
    where: BulletinsSalaireWhereUniqueInput
    update: XOR<BulletinsSalaireUpdateWithoutEmployeInput, BulletinsSalaireUncheckedUpdateWithoutEmployeInput>
    create: XOR<BulletinsSalaireCreateWithoutEmployeInput, BulletinsSalaireUncheckedCreateWithoutEmployeInput>
  }

  export type BulletinsSalaireUpdateWithWhereUniqueWithoutEmployeInput = {
    where: BulletinsSalaireWhereUniqueInput
    data: XOR<BulletinsSalaireUpdateWithoutEmployeInput, BulletinsSalaireUncheckedUpdateWithoutEmployeInput>
  }

  export type BulletinsSalaireUpdateManyWithWhereWithoutEmployeInput = {
    where: BulletinsSalaireScalarWhereInput
    data: XOR<BulletinsSalaireUpdateManyMutationInput, BulletinsSalaireUncheckedUpdateManyWithoutEmployeInput>
  }

  export type BulletinsSalaireScalarWhereInput = {
    AND?: BulletinsSalaireScalarWhereInput | BulletinsSalaireScalarWhereInput[]
    OR?: BulletinsSalaireScalarWhereInput[]
    NOT?: BulletinsSalaireScalarWhereInput | BulletinsSalaireScalarWhereInput[]
    id?: IntFilter<"BulletinsSalaire"> | number
    mois?: StringFilter<"BulletinsSalaire"> | string
    salaire_base?: DecimalNullableFilter<"BulletinsSalaire"> | Decimal | DecimalJsLike | number | string | null
    deductions?: DecimalFilter<"BulletinsSalaire"> | Decimal | DecimalJsLike | number | string
    salaire_net?: DecimalFilter<"BulletinsSalaire"> | Decimal | DecimalJsLike | number | string
    date_generation?: DateTimeFilter<"BulletinsSalaire"> | Date | string
    payRunId?: IntFilter<"BulletinsSalaire"> | number
    employeId?: IntFilter<"BulletinsSalaire"> | number
  }

  export type ContratUpsertWithWhereUniqueWithoutEmployeInput = {
    where: ContratWhereUniqueInput
    update: XOR<ContratUpdateWithoutEmployeInput, ContratUncheckedUpdateWithoutEmployeInput>
    create: XOR<ContratCreateWithoutEmployeInput, ContratUncheckedCreateWithoutEmployeInput>
  }

  export type ContratUpdateWithWhereUniqueWithoutEmployeInput = {
    where: ContratWhereUniqueInput
    data: XOR<ContratUpdateWithoutEmployeInput, ContratUncheckedUpdateWithoutEmployeInput>
  }

  export type ContratUpdateManyWithWhereWithoutEmployeInput = {
    where: ContratScalarWhereInput
    data: XOR<ContratUpdateManyMutationInput, ContratUncheckedUpdateManyWithoutEmployeInput>
  }

  export type ContratScalarWhereInput = {
    AND?: ContratScalarWhereInput | ContratScalarWhereInput[]
    OR?: ContratScalarWhereInput[]
    NOT?: ContratScalarWhereInput | ContratScalarWhereInput[]
    id?: IntFilter<"Contrat"> | number
    employeId?: IntFilter<"Contrat"> | number
    type?: EnumTypeContratFilter<"Contrat"> | $Enums.TypeContrat
    salaireFixe?: DecimalNullableFilter<"Contrat"> | Decimal | DecimalJsLike | number | string | null
    tauxJournalier?: DecimalNullableFilter<"Contrat"> | Decimal | DecimalJsLike | number | string | null
    tauxHoraire?: DecimalNullableFilter<"Contrat"> | Decimal | DecimalJsLike | number | string | null
    date_embauche?: DateTimeFilter<"Contrat"> | Date | string
    date_arret?: DateTimeNullableFilter<"Contrat"> | Date | string | null
  }

  export type PointagesUpsertWithWhereUniqueWithoutEmployeInput = {
    where: PointagesWhereUniqueInput
    update: XOR<PointagesUpdateWithoutEmployeInput, PointagesUncheckedUpdateWithoutEmployeInput>
    create: XOR<PointagesCreateWithoutEmployeInput, PointagesUncheckedCreateWithoutEmployeInput>
  }

  export type PointagesUpdateWithWhereUniqueWithoutEmployeInput = {
    where: PointagesWhereUniqueInput
    data: XOR<PointagesUpdateWithoutEmployeInput, PointagesUncheckedUpdateWithoutEmployeInput>
  }

  export type PointagesUpdateManyWithWhereWithoutEmployeInput = {
    where: PointagesScalarWhereInput
    data: XOR<PointagesUpdateManyMutationInput, PointagesUncheckedUpdateManyWithoutEmployeInput>
  }

  export type PointagesScalarWhereInput = {
    AND?: PointagesScalarWhereInput | PointagesScalarWhereInput[]
    OR?: PointagesScalarWhereInput[]
    NOT?: PointagesScalarWhereInput | PointagesScalarWhereInput[]
    id?: IntFilter<"Pointages"> | number
    employeId?: IntFilter<"Pointages"> | number
    date?: DateTimeFilter<"Pointages"> | Date | string
    entree?: DateTimeFilter<"Pointages"> | Date | string
    sortie?: DateTimeFilter<"Pointages"> | Date | string
  }

  export type PayRunCreateWithoutBulletinsInput = {
    periodeDebut: Date | string
    periodeFin: Date | string
    statut?: $Enums.PayRunStatut
    typePayRun?: $Enums.TypePayRun
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayRunUncheckedCreateWithoutBulletinsInput = {
    id?: number
    periodeDebut: Date | string
    periodeFin: Date | string
    statut?: $Enums.PayRunStatut
    typePayRun?: $Enums.TypePayRun
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayRunCreateOrConnectWithoutBulletinsInput = {
    where: PayRunWhereUniqueInput
    create: XOR<PayRunCreateWithoutBulletinsInput, PayRunUncheckedCreateWithoutBulletinsInput>
  }

  export type EmployesCreateWithoutBulletinsInput = {
    nom: string
    prenom: string
    email: string
    telephone: string
    poste: string
    date_embauche: Date | string
    date_arret?: Date | string | null
    typeContrat: $Enums.TypeContrat
    role?: $Enums.Role
    statut?: $Enums.Statut
    Contrat?: ContratCreateNestedManyWithoutEmployeInput
    pointage?: PointagesCreateNestedManyWithoutEmployeInput
  }

  export type EmployesUncheckedCreateWithoutBulletinsInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    telephone: string
    poste: string
    date_embauche: Date | string
    date_arret?: Date | string | null
    typeContrat: $Enums.TypeContrat
    role?: $Enums.Role
    statut?: $Enums.Statut
    Contrat?: ContratUncheckedCreateNestedManyWithoutEmployeInput
    pointage?: PointagesUncheckedCreateNestedManyWithoutEmployeInput
  }

  export type EmployesCreateOrConnectWithoutBulletinsInput = {
    where: EmployesWhereUniqueInput
    create: XOR<EmployesCreateWithoutBulletinsInput, EmployesUncheckedCreateWithoutBulletinsInput>
  }

  export type PaiementCreateWithoutBulletinInput = {
    montant: Decimal | DecimalJsLike | number | string
    mode: $Enums.ModePaiement
    statut: $Enums.StatutPaiement
    reference?: string | null
    date_paiement?: Date | string
  }

  export type PaiementUncheckedCreateWithoutBulletinInput = {
    id?: number
    montant: Decimal | DecimalJsLike | number | string
    mode: $Enums.ModePaiement
    statut: $Enums.StatutPaiement
    reference?: string | null
    date_paiement?: Date | string
  }

  export type PaiementCreateOrConnectWithoutBulletinInput = {
    where: PaiementWhereUniqueInput
    create: XOR<PaiementCreateWithoutBulletinInput, PaiementUncheckedCreateWithoutBulletinInput>
  }

  export type PaiementCreateManyBulletinInputEnvelope = {
    data: PaiementCreateManyBulletinInput | PaiementCreateManyBulletinInput[]
    skipDuplicates?: boolean
  }

  export type PayRunUpsertWithoutBulletinsInput = {
    update: XOR<PayRunUpdateWithoutBulletinsInput, PayRunUncheckedUpdateWithoutBulletinsInput>
    create: XOR<PayRunCreateWithoutBulletinsInput, PayRunUncheckedCreateWithoutBulletinsInput>
    where?: PayRunWhereInput
  }

  export type PayRunUpdateToOneWithWhereWithoutBulletinsInput = {
    where?: PayRunWhereInput
    data: XOR<PayRunUpdateWithoutBulletinsInput, PayRunUncheckedUpdateWithoutBulletinsInput>
  }

  export type PayRunUpdateWithoutBulletinsInput = {
    periodeDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    periodeFin?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: EnumPayRunStatutFieldUpdateOperationsInput | $Enums.PayRunStatut
    typePayRun?: EnumTypePayRunFieldUpdateOperationsInput | $Enums.TypePayRun
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayRunUncheckedUpdateWithoutBulletinsInput = {
    id?: IntFieldUpdateOperationsInput | number
    periodeDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    periodeFin?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: EnumPayRunStatutFieldUpdateOperationsInput | $Enums.PayRunStatut
    typePayRun?: EnumTypePayRunFieldUpdateOperationsInput | $Enums.TypePayRun
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployesUpsertWithoutBulletinsInput = {
    update: XOR<EmployesUpdateWithoutBulletinsInput, EmployesUncheckedUpdateWithoutBulletinsInput>
    create: XOR<EmployesCreateWithoutBulletinsInput, EmployesUncheckedCreateWithoutBulletinsInput>
    where?: EmployesWhereInput
  }

  export type EmployesUpdateToOneWithWhereWithoutBulletinsInput = {
    where?: EmployesWhereInput
    data: XOR<EmployesUpdateWithoutBulletinsInput, EmployesUncheckedUpdateWithoutBulletinsInput>
  }

  export type EmployesUpdateWithoutBulletinsInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    date_embauche?: DateTimeFieldUpdateOperationsInput | Date | string
    date_arret?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typeContrat?: EnumTypeContratFieldUpdateOperationsInput | $Enums.TypeContrat
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    Contrat?: ContratUpdateManyWithoutEmployeNestedInput
    pointage?: PointagesUpdateManyWithoutEmployeNestedInput
  }

  export type EmployesUncheckedUpdateWithoutBulletinsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    date_embauche?: DateTimeFieldUpdateOperationsInput | Date | string
    date_arret?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typeContrat?: EnumTypeContratFieldUpdateOperationsInput | $Enums.TypeContrat
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    Contrat?: ContratUncheckedUpdateManyWithoutEmployeNestedInput
    pointage?: PointagesUncheckedUpdateManyWithoutEmployeNestedInput
  }

  export type PaiementUpsertWithWhereUniqueWithoutBulletinInput = {
    where: PaiementWhereUniqueInput
    update: XOR<PaiementUpdateWithoutBulletinInput, PaiementUncheckedUpdateWithoutBulletinInput>
    create: XOR<PaiementCreateWithoutBulletinInput, PaiementUncheckedCreateWithoutBulletinInput>
  }

  export type PaiementUpdateWithWhereUniqueWithoutBulletinInput = {
    where: PaiementWhereUniqueInput
    data: XOR<PaiementUpdateWithoutBulletinInput, PaiementUncheckedUpdateWithoutBulletinInput>
  }

  export type PaiementUpdateManyWithWhereWithoutBulletinInput = {
    where: PaiementScalarWhereInput
    data: XOR<PaiementUpdateManyMutationInput, PaiementUncheckedUpdateManyWithoutBulletinInput>
  }

  export type PaiementScalarWhereInput = {
    AND?: PaiementScalarWhereInput | PaiementScalarWhereInput[]
    OR?: PaiementScalarWhereInput[]
    NOT?: PaiementScalarWhereInput | PaiementScalarWhereInput[]
    id?: IntFilter<"Paiement"> | number
    montant?: DecimalFilter<"Paiement"> | Decimal | DecimalJsLike | number | string
    mode?: EnumModePaiementFilter<"Paiement"> | $Enums.ModePaiement
    statut?: EnumStatutPaiementFilter<"Paiement"> | $Enums.StatutPaiement
    reference?: StringNullableFilter<"Paiement"> | string | null
    date_paiement?: DateTimeFilter<"Paiement"> | Date | string
    bulletinId?: IntFilter<"Paiement"> | number
  }

  export type BulletinsSalaireCreateWithoutPayRunInput = {
    mois: string
    salaire_base?: Decimal | DecimalJsLike | number | string | null
    deductions?: Decimal | DecimalJsLike | number | string
    salaire_net: Decimal | DecimalJsLike | number | string
    date_generation?: Date | string
    employe: EmployesCreateNestedOneWithoutBulletinsInput
    paiements?: PaiementCreateNestedManyWithoutBulletinInput
  }

  export type BulletinsSalaireUncheckedCreateWithoutPayRunInput = {
    id?: number
    mois: string
    salaire_base?: Decimal | DecimalJsLike | number | string | null
    deductions?: Decimal | DecimalJsLike | number | string
    salaire_net: Decimal | DecimalJsLike | number | string
    date_generation?: Date | string
    employeId: number
    paiements?: PaiementUncheckedCreateNestedManyWithoutBulletinInput
  }

  export type BulletinsSalaireCreateOrConnectWithoutPayRunInput = {
    where: BulletinsSalaireWhereUniqueInput
    create: XOR<BulletinsSalaireCreateWithoutPayRunInput, BulletinsSalaireUncheckedCreateWithoutPayRunInput>
  }

  export type BulletinsSalaireCreateManyPayRunInputEnvelope = {
    data: BulletinsSalaireCreateManyPayRunInput | BulletinsSalaireCreateManyPayRunInput[]
    skipDuplicates?: boolean
  }

  export type BulletinsSalaireUpsertWithWhereUniqueWithoutPayRunInput = {
    where: BulletinsSalaireWhereUniqueInput
    update: XOR<BulletinsSalaireUpdateWithoutPayRunInput, BulletinsSalaireUncheckedUpdateWithoutPayRunInput>
    create: XOR<BulletinsSalaireCreateWithoutPayRunInput, BulletinsSalaireUncheckedCreateWithoutPayRunInput>
  }

  export type BulletinsSalaireUpdateWithWhereUniqueWithoutPayRunInput = {
    where: BulletinsSalaireWhereUniqueInput
    data: XOR<BulletinsSalaireUpdateWithoutPayRunInput, BulletinsSalaireUncheckedUpdateWithoutPayRunInput>
  }

  export type BulletinsSalaireUpdateManyWithWhereWithoutPayRunInput = {
    where: BulletinsSalaireScalarWhereInput
    data: XOR<BulletinsSalaireUpdateManyMutationInput, BulletinsSalaireUncheckedUpdateManyWithoutPayRunInput>
  }

  export type EmployesCreateWithoutContratInput = {
    nom: string
    prenom: string
    email: string
    telephone: string
    poste: string
    date_embauche: Date | string
    date_arret?: Date | string | null
    typeContrat: $Enums.TypeContrat
    role?: $Enums.Role
    statut?: $Enums.Statut
    bulletins?: BulletinsSalaireCreateNestedManyWithoutEmployeInput
    pointage?: PointagesCreateNestedManyWithoutEmployeInput
  }

  export type EmployesUncheckedCreateWithoutContratInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    telephone: string
    poste: string
    date_embauche: Date | string
    date_arret?: Date | string | null
    typeContrat: $Enums.TypeContrat
    role?: $Enums.Role
    statut?: $Enums.Statut
    bulletins?: BulletinsSalaireUncheckedCreateNestedManyWithoutEmployeInput
    pointage?: PointagesUncheckedCreateNestedManyWithoutEmployeInput
  }

  export type EmployesCreateOrConnectWithoutContratInput = {
    where: EmployesWhereUniqueInput
    create: XOR<EmployesCreateWithoutContratInput, EmployesUncheckedCreateWithoutContratInput>
  }

  export type EmployesUpsertWithoutContratInput = {
    update: XOR<EmployesUpdateWithoutContratInput, EmployesUncheckedUpdateWithoutContratInput>
    create: XOR<EmployesCreateWithoutContratInput, EmployesUncheckedCreateWithoutContratInput>
    where?: EmployesWhereInput
  }

  export type EmployesUpdateToOneWithWhereWithoutContratInput = {
    where?: EmployesWhereInput
    data: XOR<EmployesUpdateWithoutContratInput, EmployesUncheckedUpdateWithoutContratInput>
  }

  export type EmployesUpdateWithoutContratInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    date_embauche?: DateTimeFieldUpdateOperationsInput | Date | string
    date_arret?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typeContrat?: EnumTypeContratFieldUpdateOperationsInput | $Enums.TypeContrat
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    bulletins?: BulletinsSalaireUpdateManyWithoutEmployeNestedInput
    pointage?: PointagesUpdateManyWithoutEmployeNestedInput
  }

  export type EmployesUncheckedUpdateWithoutContratInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    date_embauche?: DateTimeFieldUpdateOperationsInput | Date | string
    date_arret?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typeContrat?: EnumTypeContratFieldUpdateOperationsInput | $Enums.TypeContrat
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    bulletins?: BulletinsSalaireUncheckedUpdateManyWithoutEmployeNestedInput
    pointage?: PointagesUncheckedUpdateManyWithoutEmployeNestedInput
  }

  export type EmployesCreateWithoutPointageInput = {
    nom: string
    prenom: string
    email: string
    telephone: string
    poste: string
    date_embauche: Date | string
    date_arret?: Date | string | null
    typeContrat: $Enums.TypeContrat
    role?: $Enums.Role
    statut?: $Enums.Statut
    bulletins?: BulletinsSalaireCreateNestedManyWithoutEmployeInput
    Contrat?: ContratCreateNestedManyWithoutEmployeInput
  }

  export type EmployesUncheckedCreateWithoutPointageInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    telephone: string
    poste: string
    date_embauche: Date | string
    date_arret?: Date | string | null
    typeContrat: $Enums.TypeContrat
    role?: $Enums.Role
    statut?: $Enums.Statut
    bulletins?: BulletinsSalaireUncheckedCreateNestedManyWithoutEmployeInput
    Contrat?: ContratUncheckedCreateNestedManyWithoutEmployeInput
  }

  export type EmployesCreateOrConnectWithoutPointageInput = {
    where: EmployesWhereUniqueInput
    create: XOR<EmployesCreateWithoutPointageInput, EmployesUncheckedCreateWithoutPointageInput>
  }

  export type EmployesUpsertWithoutPointageInput = {
    update: XOR<EmployesUpdateWithoutPointageInput, EmployesUncheckedUpdateWithoutPointageInput>
    create: XOR<EmployesCreateWithoutPointageInput, EmployesUncheckedCreateWithoutPointageInput>
    where?: EmployesWhereInput
  }

  export type EmployesUpdateToOneWithWhereWithoutPointageInput = {
    where?: EmployesWhereInput
    data: XOR<EmployesUpdateWithoutPointageInput, EmployesUncheckedUpdateWithoutPointageInput>
  }

  export type EmployesUpdateWithoutPointageInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    date_embauche?: DateTimeFieldUpdateOperationsInput | Date | string
    date_arret?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typeContrat?: EnumTypeContratFieldUpdateOperationsInput | $Enums.TypeContrat
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    bulletins?: BulletinsSalaireUpdateManyWithoutEmployeNestedInput
    Contrat?: ContratUpdateManyWithoutEmployeNestedInput
  }

  export type EmployesUncheckedUpdateWithoutPointageInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    date_embauche?: DateTimeFieldUpdateOperationsInput | Date | string
    date_arret?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typeContrat?: EnumTypeContratFieldUpdateOperationsInput | $Enums.TypeContrat
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    bulletins?: BulletinsSalaireUncheckedUpdateManyWithoutEmployeNestedInput
    Contrat?: ContratUncheckedUpdateManyWithoutEmployeNestedInput
  }

  export type BulletinsSalaireCreateWithoutPaiementsInput = {
    mois: string
    salaire_base?: Decimal | DecimalJsLike | number | string | null
    deductions?: Decimal | DecimalJsLike | number | string
    salaire_net: Decimal | DecimalJsLike | number | string
    date_generation?: Date | string
    payRun: PayRunCreateNestedOneWithoutBulletinsInput
    employe: EmployesCreateNestedOneWithoutBulletinsInput
  }

  export type BulletinsSalaireUncheckedCreateWithoutPaiementsInput = {
    id?: number
    mois: string
    salaire_base?: Decimal | DecimalJsLike | number | string | null
    deductions?: Decimal | DecimalJsLike | number | string
    salaire_net: Decimal | DecimalJsLike | number | string
    date_generation?: Date | string
    payRunId: number
    employeId: number
  }

  export type BulletinsSalaireCreateOrConnectWithoutPaiementsInput = {
    where: BulletinsSalaireWhereUniqueInput
    create: XOR<BulletinsSalaireCreateWithoutPaiementsInput, BulletinsSalaireUncheckedCreateWithoutPaiementsInput>
  }

  export type BulletinsSalaireUpsertWithoutPaiementsInput = {
    update: XOR<BulletinsSalaireUpdateWithoutPaiementsInput, BulletinsSalaireUncheckedUpdateWithoutPaiementsInput>
    create: XOR<BulletinsSalaireCreateWithoutPaiementsInput, BulletinsSalaireUncheckedCreateWithoutPaiementsInput>
    where?: BulletinsSalaireWhereInput
  }

  export type BulletinsSalaireUpdateToOneWithWhereWithoutPaiementsInput = {
    where?: BulletinsSalaireWhereInput
    data: XOR<BulletinsSalaireUpdateWithoutPaiementsInput, BulletinsSalaireUncheckedUpdateWithoutPaiementsInput>
  }

  export type BulletinsSalaireUpdateWithoutPaiementsInput = {
    mois?: StringFieldUpdateOperationsInput | string
    salaire_base?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salaire_net?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date_generation?: DateTimeFieldUpdateOperationsInput | Date | string
    payRun?: PayRunUpdateOneRequiredWithoutBulletinsNestedInput
    employe?: EmployesUpdateOneRequiredWithoutBulletinsNestedInput
  }

  export type BulletinsSalaireUncheckedUpdateWithoutPaiementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    mois?: StringFieldUpdateOperationsInput | string
    salaire_base?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salaire_net?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date_generation?: DateTimeFieldUpdateOperationsInput | Date | string
    payRunId?: IntFieldUpdateOperationsInput | number
    employeId?: IntFieldUpdateOperationsInput | number
  }

  export type BulletinsSalaireCreateManyEmployeInput = {
    id?: number
    mois: string
    salaire_base?: Decimal | DecimalJsLike | number | string | null
    deductions?: Decimal | DecimalJsLike | number | string
    salaire_net: Decimal | DecimalJsLike | number | string
    date_generation?: Date | string
    payRunId: number
  }

  export type ContratCreateManyEmployeInput = {
    id?: number
    type: $Enums.TypeContrat
    salaireFixe?: Decimal | DecimalJsLike | number | string | null
    tauxJournalier?: Decimal | DecimalJsLike | number | string | null
    tauxHoraire?: Decimal | DecimalJsLike | number | string | null
    date_embauche: Date | string
    date_arret?: Date | string | null
  }

  export type PointagesCreateManyEmployeInput = {
    id?: number
    date: Date | string
    entree: Date | string
    sortie: Date | string
  }

  export type BulletinsSalaireUpdateWithoutEmployeInput = {
    mois?: StringFieldUpdateOperationsInput | string
    salaire_base?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salaire_net?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date_generation?: DateTimeFieldUpdateOperationsInput | Date | string
    payRun?: PayRunUpdateOneRequiredWithoutBulletinsNestedInput
    paiements?: PaiementUpdateManyWithoutBulletinNestedInput
  }

  export type BulletinsSalaireUncheckedUpdateWithoutEmployeInput = {
    id?: IntFieldUpdateOperationsInput | number
    mois?: StringFieldUpdateOperationsInput | string
    salaire_base?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salaire_net?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date_generation?: DateTimeFieldUpdateOperationsInput | Date | string
    payRunId?: IntFieldUpdateOperationsInput | number
    paiements?: PaiementUncheckedUpdateManyWithoutBulletinNestedInput
  }

  export type BulletinsSalaireUncheckedUpdateManyWithoutEmployeInput = {
    id?: IntFieldUpdateOperationsInput | number
    mois?: StringFieldUpdateOperationsInput | string
    salaire_base?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salaire_net?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date_generation?: DateTimeFieldUpdateOperationsInput | Date | string
    payRunId?: IntFieldUpdateOperationsInput | number
  }

  export type ContratUpdateWithoutEmployeInput = {
    type?: EnumTypeContratFieldUpdateOperationsInput | $Enums.TypeContrat
    salaireFixe?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tauxJournalier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tauxHoraire?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_embauche?: DateTimeFieldUpdateOperationsInput | Date | string
    date_arret?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContratUncheckedUpdateWithoutEmployeInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeContratFieldUpdateOperationsInput | $Enums.TypeContrat
    salaireFixe?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tauxJournalier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tauxHoraire?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_embauche?: DateTimeFieldUpdateOperationsInput | Date | string
    date_arret?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContratUncheckedUpdateManyWithoutEmployeInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeContratFieldUpdateOperationsInput | $Enums.TypeContrat
    salaireFixe?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tauxJournalier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tauxHoraire?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_embauche?: DateTimeFieldUpdateOperationsInput | Date | string
    date_arret?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PointagesUpdateWithoutEmployeInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    entree?: DateTimeFieldUpdateOperationsInput | Date | string
    sortie?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointagesUncheckedUpdateWithoutEmployeInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    entree?: DateTimeFieldUpdateOperationsInput | Date | string
    sortie?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointagesUncheckedUpdateManyWithoutEmployeInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    entree?: DateTimeFieldUpdateOperationsInput | Date | string
    sortie?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementCreateManyBulletinInput = {
    id?: number
    montant: Decimal | DecimalJsLike | number | string
    mode: $Enums.ModePaiement
    statut: $Enums.StatutPaiement
    reference?: string | null
    date_paiement?: Date | string
  }

  export type PaiementUpdateWithoutBulletinInput = {
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mode?: EnumModePaiementFieldUpdateOperationsInput | $Enums.ModePaiement
    statut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    date_paiement?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementUncheckedUpdateWithoutBulletinInput = {
    id?: IntFieldUpdateOperationsInput | number
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mode?: EnumModePaiementFieldUpdateOperationsInput | $Enums.ModePaiement
    statut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    date_paiement?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementUncheckedUpdateManyWithoutBulletinInput = {
    id?: IntFieldUpdateOperationsInput | number
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mode?: EnumModePaiementFieldUpdateOperationsInput | $Enums.ModePaiement
    statut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    date_paiement?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulletinsSalaireCreateManyPayRunInput = {
    id?: number
    mois: string
    salaire_base?: Decimal | DecimalJsLike | number | string | null
    deductions?: Decimal | DecimalJsLike | number | string
    salaire_net: Decimal | DecimalJsLike | number | string
    date_generation?: Date | string
    employeId: number
  }

  export type BulletinsSalaireUpdateWithoutPayRunInput = {
    mois?: StringFieldUpdateOperationsInput | string
    salaire_base?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salaire_net?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date_generation?: DateTimeFieldUpdateOperationsInput | Date | string
    employe?: EmployesUpdateOneRequiredWithoutBulletinsNestedInput
    paiements?: PaiementUpdateManyWithoutBulletinNestedInput
  }

  export type BulletinsSalaireUncheckedUpdateWithoutPayRunInput = {
    id?: IntFieldUpdateOperationsInput | number
    mois?: StringFieldUpdateOperationsInput | string
    salaire_base?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salaire_net?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date_generation?: DateTimeFieldUpdateOperationsInput | Date | string
    employeId?: IntFieldUpdateOperationsInput | number
    paiements?: PaiementUncheckedUpdateManyWithoutBulletinNestedInput
  }

  export type BulletinsSalaireUncheckedUpdateManyWithoutPayRunInput = {
    id?: IntFieldUpdateOperationsInput | number
    mois?: StringFieldUpdateOperationsInput | string
    salaire_base?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salaire_net?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date_generation?: DateTimeFieldUpdateOperationsInput | Date | string
    employeId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}