from nova.lexer.lexer import Lexer
from nova.parser.parser import Parser
from nova.semantic.semantic_token_builder import SemanticTokenBuilder


def tokenize(code: str):
    lexer = Lexer(code)
    tokens = lexer.tokenize()

    parser = Parser(tokens)
    program = parser.parse()

    semantic_tokens = SemanticTokenBuilder().build(program)

    return {
        "tokens": [
            token.to_dict()
            for token in tokens
        ],
        "semantic": [
            token.to_dict()
            for token in semantic_tokens
        ],
    }