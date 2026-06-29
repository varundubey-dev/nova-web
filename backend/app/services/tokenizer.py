from nova.lexer.lexer import Lexer
from nova.lexer.token_types import TokenType
from nova.parser.parser import Parser
from nova.semantic.semantic_token_builder import SemanticTokenBuilder

from nova.errors import NovaError


def tokenize(code: str):
    lexer = Lexer(code, tolerant=True)
    tokens = lexer.tokenize()

    parser_tokens = [
        token
        for token in tokens
        if token.type
        not in (
            TokenType.COMMENT,
            TokenType.ERROR,
        )
    ]

    semantic_tokens = []
    error = None

    try:
        parser = Parser(parser_tokens)
        program = parser.parse()

        semantic_tokens = SemanticTokenBuilder().build(program)

    except NovaError as e:
        error = {
            "message": str(e),
            "line": e.line,
            "column": e.column,
        }

    return {
        "tokens": [token.to_dict() for token in tokens],
        "semantic": [token.to_dict() for token in semantic_tokens],
        "error": error,
    }
