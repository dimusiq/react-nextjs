import React from 'react';
import { Button, Htag, P, Tag } from '../components/index';


export default function Home(): JSX.Element {
	return (
		<>
			<Htag tag='h1'>Текст</Htag>
			<Button appearance='primary' arrow='right'>Button</Button>
			<Button appearance='ghost' arrow='down'>Button</Button>
			<P size='l'>Большой</P>
			<P size='m'>Средний</P>
			<P size='s'>Маленький</P>
			<Tag size='s' color='ghost'>Ghost</Tag>
			<Tag size='m' color='red'>Red</Tag>
			<Tag size='s' color='green'>Green</Tag>
			<Tag size='s' color='primary'>Green</Tag>

		</>
	);
}
