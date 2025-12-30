/**
 * Custom Application Error Classes
 * Based on Node.js Best Practices
 *
 * Usage:
 * throw new AppError('Something went wrong', 400, 'VALIDATION_ERROR');
 * throw new NotFoundError('User not found');
 * throw new ValidationError('Invalid email format');
 */

export interface ErrorResponse {
  success: false;
  error: {
    message: string;
    code: string;
    statusCode: number;
    timestamp: string;
    path?: string;
  };
}

/**
 * Base Application Error
 * Extend this for all custom errors
 */
export class AppError extends Error {
  public readonly statusCode: number;
  public readonly code: string;
  public readonly isOperational: boolean;
  public readonly timestamp: Date;

  constructor(message: string, statusCode = 500, code = 'INTERNAL_ERROR', isOperational = true) {
    super(message);

    this.statusCode = statusCode;
    this.code = code;
    this.isOperational = isOperational;
    this.timestamp = new Date();

    // Maintains proper stack trace for where our error was thrown
    Error.captureStackTrace(this, this.constructor);

    // Set the prototype explicitly (needed for instanceof checks)
    Object.setPrototypeOf(this, AppError.prototype);
  }

  toJSON(): ErrorResponse {
    return {
      success: false,
      error: {
        message: this.message,
        code: this.code,
        statusCode: this.statusCode,
        timestamp: this.timestamp.toISOString(),
      },
    };
  }
}

/**
 * 400 Bad Request - Validation Error
 */
export class ValidationError extends AppError {
  constructor(message = 'Validation failed') {
    super(message, 400, 'VALIDATION_ERROR');
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}

/**
 * 401 Unauthorized
 */
export class UnauthorizedError extends AppError {
  constructor(message = 'Unauthorized') {
    super(message, 401, 'UNAUTHORIZED');
    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }
}

/**
 * 403 Forbidden
 */
export class ForbiddenError extends AppError {
  constructor(message = 'Forbidden') {
    super(message, 403, 'FORBIDDEN');
    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }
}

/**
 * 404 Not Found
 */
export class NotFoundError extends AppError {
  constructor(message = 'Resource not found') {
    super(message, 404, 'NOT_FOUND');
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}

/**
 * 409 Conflict
 */
export class ConflictError extends AppError {
  constructor(message = 'Resource already exists') {
    super(message, 409, 'CONFLICT');
    Object.setPrototypeOf(this, ConflictError.prototype);
  }
}

/**
 * 429 Too Many Requests
 */
export class RateLimitError extends AppError {
  constructor(message = 'Too many requests') {
    super(message, 429, 'RATE_LIMIT_EXCEEDED');
    Object.setPrototypeOf(this, RateLimitError.prototype);
  }
}

/**
 * 500 Internal Server Error
 */
export class InternalError extends AppError {
  constructor(message = 'Internal server error') {
    super(message, 500, 'INTERNAL_ERROR', false); // Not operational
    Object.setPrototypeOf(this, InternalError.prototype);
  }
}

/**
 * 503 Service Unavailable
 */
export class ServiceUnavailableError extends AppError {
  constructor(message = 'Service temporarily unavailable') {
    super(message, 503, 'SERVICE_UNAVAILABLE');
    Object.setPrototypeOf(this, ServiceUnavailableError.prototype);
  }
}

/**
 * Error handler utility
 * Use in API routes or middleware
 */
export function handleError(error: unknown): ErrorResponse {
  if (error instanceof AppError) {
    return error.toJSON();
  }

  // Unknown error - treat as internal error
  const internalError = new InternalError(
    error instanceof Error ? error.message : 'An unexpected error occurred'
  );

  return internalError.toJSON();
}

/**
 * Type guard to check if error is operational
 * Operational errors are expected and can be handled gracefully
 * Non-operational errors (programmer errors) may require restart
 */
export function isOperationalError(error: unknown): boolean {
  if (error instanceof AppError) {
    return error.isOperational;
  }
  return false;
}
