import jwt from 'jsonwebtoken';
export declare class JWTService {
    static cryptData(data: Record<string, unknown>, secretKey: string, validityTime?: number): string;
    static decryptToken(token: string, secretKey: string): string | jwt.JwtPayload;
}
//# sourceMappingURL=JWTService.d.ts.map