from nova.errors import (
    LexerError,
    ParserError,
    RuntimeError,
    TypeError,
)


def get_error_category(error):
    if isinstance(error, LexerError):
        return "Lexer Error"

    if isinstance(error, ParserError):
        return "Parser Error"

    if isinstance(error, TypeError):
        return "Type Error"

    if isinstance(error, RuntimeError):
        return "Runtime Error"

    return "Error"