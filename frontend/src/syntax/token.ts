export const TOKEN_TYPES = {
  // Literals
  NUMBER: "NUMBER",
  STRING: "STRING",
  BOOLEAN: "BOOLEAN",
  NULL: "NULL",

  // Identifiers
  IDENTIFIER: "IDENTIFIER",

  // Keywords
  PRINT: "PRINT",
  IF: "IF",
  ELSE: "ELSE",

  WHILE: "WHILE",
  FOR: "FOR",
  IN: "IN",

  BREAK: "BREAK",
  CONTINUE: "CONTINUE",

  FN: "FN",
  RETURN: "RETURN",

  IMPORT: "IMPORT",
  FROM: "FROM",
  EXPORT: "EXPORT",
  AS: "AS",

  // Datatypes
  TYPE: "TYPE",

  // Operators
  PLUS: "PLUS",
  MINUS: "MINUS",
  STAR: "STAR",
  SLASH: "SLASH",
  MODULO: "MODULO",

  EQUAL_EQUAL: "EQUAL_EQUAL",
  NOT_EQUAL: "NOT_EQUAL",

  LESS: "LESS",
  GREATER: "GREATER",

  LESS_EQUAL: "LESS_EQUAL",
  GREATER_EQUAL: "GREATER_EQUAL",

  AND: "AND",
  OR: "OR",
  NOT: "NOT",

  RANGE_EXCLUSIVE: "RANGE_EXCLUSIVE",
  RANGE_INCLUSIVE: "RANGE_INCLUSIVE",

  // Symbols
  COLON: "COLON",
  DOUBLE_COLON: "DOUBLE_COLON",
  EQUALS: "EQUALS",

  LPAREN: "LPAREN",
  RPAREN: "RPAREN",

  LBRACKET: "LBRACKET",
  RBRACKET: "RBRACKET",

  LBRACE: "LBRACE",
  RBRACE: "RBRACE",

  DOT: "DOT",
  QUESTION: "QUESTION",
  COMMA: "COMMA",

  ARROW: "ARROW",

  // Special
  WHITESPACE: "WHITESPACE",
  COMMENT: "COMMENT",
  ERROR: "ERROR",
  NEWLINE: "NEWLINE",
  EOF: "EOF",
} as const;

export type TokenType =
  (typeof TOKEN_TYPES)[keyof typeof TOKEN_TYPES];

export interface Token {
  type: TokenType;
  value: string | number | boolean | null;
  line: number;
  column: number;
}

export interface SemanticToken {
  kind: string;
  value: string | string[];
  line: number;
  column: number;
  length: number;
}