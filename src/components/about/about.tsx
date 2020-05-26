import React from 'react';
import styles from './about.module.scss';
import GreyBox from '../common/greyBox';

export interface AboutProps{
	greyBoxInfo:{ label: string, value: string }[];
}

const About = (props:AboutProps) => {
	const {
		greyBoxInfo,
	} = props;

	return (
		<div className={styles.tableSpacing}>
			<GreyBox
				items={greyBoxInfo}
			/>
		</div>
	);
};

export default About;
