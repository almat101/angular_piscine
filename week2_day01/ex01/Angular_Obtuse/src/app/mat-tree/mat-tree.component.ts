import {FlatTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

interface TreeNode {
  name: string;
  children?: TreeNode[];
  extension?: string; // Optional extension property
}

  const TREE_DATA: TreeNode[] = [
	{
	  name: 'node_modules', extension: '',
	  children: [{name: '@angular'}, {name: '@babel'}, {name: '@esbuild'}],
	},
	{
	  name: 'src', extension: '',
	  children: [
		{
		  name: 'app', extension: '',
		  children: [
			{name: 'app.component.css', extension: '.css'},
			{name: 'app.component.html', extension: '.html'},
			{name: 'app.component.spec.ts', extension: '.ts'},
			{name: 'app.component.ts', extension: '.ts'},
			{name: 'app.config.ts', extension: '.ts'},
			{name: 'app.routes.ts', extension: '.ts'},],
		},
		{
		  name: 'assets', extension: '',
		  children: [{name: '.gitkeep' , extension : 'other'}],
		},
		{
		  name: 'favicon.ico', extension: 'other',
		},
		{
			name: 'index.html', extension: '.html',
		},
		{
			name: 'main.server.ts', extension: '.ts',
		},
		{
			name: 'main.ts', extension: '.ts',
		},
		{
			name: 'styles.css', extension: '.css',
		},
	  ],
	},
	{
	  name: 'angular.json', extension: 'other',
	},
	{
	  name: 'package-lock.json', extension: 'other',
	},
	{
 	  name: 'package.json', extension: 'other',
	},
	{
	  name: 'README.md', extension: 'other',
	},
	{
	  name: 'server.ts', extension: '.ts',
	},
	{
	  name: 'tsconfig.app.json', extension: 'other',
	},
	{
	  name: 'tsconfig.json', extension: 'other',
	},
	{
	  name: 'tsconfig.server.json', extension: 'other',
	},
  ];

  interface ExampleFlatNode {
	expandable: boolean;
	name: string;
	level: number;
	extension?: string; // Add the 'extension' property
  }

@Component({
  selector: 'app-mat-tree',
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule],
  templateUrl: './mat-tree.component.html',
  styleUrl: './mat-tree.component.css'
})

export class MatTreeComponent {

	getIconClass(node: ExampleFlatNode) {
		if (node.extension === '') {
		  return 'yellow';  // Return the appropriate class name
		} else if (node.extension === '.ts') {
		  return 'blue';   // Return the appropriate class name
		} else if (node.extension === '.html') {
		  return 'orange';  // Return the appropriate class name
		} else if (node.extension === '.css') {
		  return 'light-blue';  // Return the appropriate class name
		} else if (node.extension === '.other') {
		  return 'gray';  // Return the appropriate class name
		} else
		return '';
	}

	private _transformer = (node: TreeNode, level: number): ExampleFlatNode => {
		return {
			expandable: !!node.children && node.children.length > 0,
			name: node.name,
			level: level,
			extension: node.extension || '',
		};
	};

	treeControl = new FlatTreeControl<ExampleFlatNode>(
		node => node.level,
		node => node.expandable
	);

	treeFlattener = new MatTreeFlattener(
		this._transformer,
		node => node.level,
		node => node.expandable,
		node => node.children
	);

	dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

	constructor() {
		this.dataSource.data = TREE_DATA; // Corrected line: Use dataSource instead of this.dataSource
	}

	hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  }
