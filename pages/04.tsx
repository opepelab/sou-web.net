import React from 'react';


//propsの型定義
type Props = {
    name: string;
}



const HelloMassage: React.FC<Props> = (props) => <div>Hello {props.name}</div>;

export default function Index() {
    return (
        <div>
            <HelloMassage name="redimpulz" />
        </div>
    );
};