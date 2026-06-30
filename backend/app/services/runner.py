from nova.api import run_source
from nova.errors import NovaError
from app.utils.errors import get_error_category

MAX_SOURCE_SIZE = 100_000      # characters
MAX_LINES = 5_000              # lines


def run(code: str):
    # -------------------------
    # Request Validation
    # -------------------------

    if not code.strip():
        return {
            "output": [],
            "error": {
                "category": "Request Error",
                "message": "Source code cannot be empty.",
                "line": None,
                "column": None,
                "sourceLine": "",
            },
        }

    if len(code) > MAX_SOURCE_SIZE:
        return {
            "output": [],
            "error": {
                "category": "Request Error",
                "message": f"Program exceeds maximum size of {MAX_SOURCE_SIZE:,} characters.",
                "line": None,
                "column": None,
                "sourceLine": "",
            },
        }

    if code.count("\n") + 1 > MAX_LINES:
        return {
            "output": [],
            "error": {
                "category": "Request Error",
                "message": f"Program exceeds maximum size of {MAX_LINES:,} lines.",
                "line": None,
                "column": None,
                "sourceLine": "",
            },
        }

    try:
        output = run_source(
            code,
            input_provider=None,
        )

        return {
            "output": output,
            "error": None,
        }

    except NovaError as error:
        lines = code.splitlines()

        source_line = ""

        if (
            error.line is not None
            and 1 <= error.line <= len(lines)
        ):
            source_line = lines[error.line - 1]

        return {
            "output": [],
            "error": {
                "category": get_error_category(error),
                "message": error.message,
                "line": error.line,
                "column": error.column,
                "sourceLine": source_line,
            },
        }