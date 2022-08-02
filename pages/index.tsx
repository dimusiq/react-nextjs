import React, { useState } from 'react';
import { Button, Htag, P, Rating, Tag } from '../components/index';
import {  withLayout } from '../layout/Layout';

function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(4);
	return (
		<>
			<Htag tag='h1'>Текст</Htag>
			<Button appearance='primary' arrow='right'>
				Button
			</Button>
			<Button appearance='ghost' arrow='down'>
				Button
			</Button>
			<P size='l'>Большой</P>
			<P size='m'>Средний</P>
			<P size='s'>Маленький</P>
			<Tag size='s' color='ghost'>
				Ghost
			</Tag>
			<Tag size='m' color='red'>
				Red
			</Tag>
			<Tag size='s' color='green'>
				Green
			</Tag>
			<Tag size='s' color='primary'>
				Green
			</Tag>
			<Rating rating={rating} isEditable setRating={setRating} />
		</>
	);
}

export default withLayout(Home);