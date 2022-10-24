import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import {
	Button,
	Htag,
	Input,
	P,
	Rating,
	Tag,
	Textarea,
} from '../components/index';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';

function Home({ menu }: HomeProps): JSX.Element {
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
			<Input placeholder='test' />
			<Textarea placeholder='textarea' />
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
		firstCategory,
	});
	return {
		props: {
			menu,
			firstCategory,
		},
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
