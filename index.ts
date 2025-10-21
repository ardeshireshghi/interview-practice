type Operator = '^' | '*' | '-' | '+';
type Tokens = Array<string | Operator>;

interface OperationRunner {
  exec(a: number, b: number): number;
}

const OPERATOR_ORDER: ReadonlyArray<Operator> = ['^', '*', '-', '+'];

class Power implements OperationRunner {
  public exec(a: number, b: number): number {
    return a ** b;
  }
}

class Multiply implements OperationRunner {
  public exec(a: number, b: number): number {
    return a * b;
  }
}

class Subtract implements OperationRunner {
  public exec(a: number, b: number): number {
    return a - b;
  }
}

class Increment implements OperationRunner {
  public exec(a: number, b: number): number {
    return a + b;
  }
}

const opetatorToOperationRunner = {
  '^': new Power(),
  '*': new Multiply(),
  '-': new Subtract(),
  '+': new Increment(),
};

function runOperation(operator: Operator, tokens: Tokens, index: number) {
  const leftOperand = Number(tokens[index - 1]);
  const rightOperand = Number(tokens[index + 1]);

  const operationRunner = opetatorToOperationRunner[operator];
  const result = operationRunner.exec(leftOperand, rightOperand);

  tokens.splice(index - 1, 3, result.toString());
}

export function evaluate(s: string): number {
  const tokens = s.split(' ').filter(Boolean);

  for (const operation of OPERATOR_ORDER) {
    let i = 0;

    while (i < tokens.length) {
      if (tokens[i] === operation) {
        runOperation(operation, tokens, i);
        i--;
      }

      i++;
    }
  }
  return Number(tokens[0]);
}
