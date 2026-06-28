from nova.lexer.lexer import Lexer


def tokenize(code: str):
    lexer = Lexer(code)

    return [
        token.to_dict()
        for token in lexer.tokenize()
    ]