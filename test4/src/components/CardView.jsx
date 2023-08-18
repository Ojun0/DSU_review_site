import React from 'react';
import '../App.css';
import Card from './Card';

const Data = [
    {
        image: '그냥 사진',
        title: '그냥 제목',
        inner: '그냥 제목안에 들어간 내용',
        user: '뭐 글쓴 사람 이름',
        likes: '추천수 교수님 만만세',
    },

    {
        image: '그냥 사진2',
        title: '그냥 제목2',
        inner: '그냥 제목안에 들어간 내용2',
        user: '뭐 글쓴 사람 이름2',
        likes: '추천수 교수님 만만세2',
    },

    {
        image: '그냥 사진3',
        title: '그냥 제목3',
        inner: '그냥 제목안에 들어간 내용3',
        user: '뭐 글쓴 사람 이름3',
        likes: '추천수 교수님 만만세3',
    },

    {
        image: '그냥 사진4',
        title: '그냥 제목4',
        inner: '그냥 제목안에 들어간 내용4',
        user: '뭐 글쓴 사람 이름4',
        likes: '추천수 교수님 만만세4',
    },

    {
        image: '그냥 사진5',
        title: '그냥 제목5',
        inner: '그냥 제목안에 들어간 내용5',
        user: '뭐 글쓴 사람 이름5',
        likes: '추천수 교수님 만만세5',
    },

    {
        image: '그냥 사진6',
        title: '그냥 제목6',
        inner: '그냥 제목안에 들어간 내용6',
        user: '뭐 글쓴 사람 이름6',
        likes: '추천수 교수님 만만세6',
    },

    {
        image: '그냥 사진7',
        title: '그냥 제목7',
        inner: '그냥 제목안에 들어간 내용7',
        user: '뭐 글쓴 사람 이름7',
        likes: '추천수 교수님 만만세7',
    },
];

const CardView = (props) => {
    return Data.map((e, index) => {
        return (
            <Card title={e.title} image={e.image} inner={e.inner} user={e.user} likes={e.likes} />
        );
    });
};

export default CardView;
