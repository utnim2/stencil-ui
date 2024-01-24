
import { types as t } from '@babel/core';


interface Template {
	(variables: TemplateVariables, context: TemplateContext): t.Statement | t.Statement[];
}

interface JSXRuntimeImport {
	source: string;
	namespace?: string;
	specifiers?: string[];
}

interface State {
	componentName: string;
	caller?: { previousExport?: string | null };
}

interface Options {
	typescript?: boolean;
	titleProp?: boolean;
	descProp?: boolean;
	expandProps?: boolean | 'start' | 'end';
	ref?: boolean;
	template?: Template;
	state: State;
	native?: boolean;
	memo?: boolean;
	exportType?: 'named' | 'default';
	namedExport?: string;
	jsxRuntime?: 'automatic' | 'classic';
	jsxRuntimeImport?: JSXRuntimeImport;
	importSource?: string;
}

interface TemplateVariables {
	componentName: string;
	interfaces: t.TSInterfaceDeclaration[];
	props: (t.ObjectPattern | t.Identifier)[];
	imports: t.ImportDeclaration[];
	exports: (t.VariableDeclaration | t.ExportDeclaration | t.Statement)[];
	jsx: t.JSXElement;
}

interface TemplateContext {
	options: Options;
	tpl: any;
}

const tsTemplate: Template = (
	{ imports, interfaces, componentName, props, jsx, exports },
	{ tpl }
) => tpl`
${imports};

${interfaces};

const ${componentName} = (${props}): React.JSX.Element => (
  ${jsx}
);

${exports};
`;

export default tsTemplate;
