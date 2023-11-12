import React, { useEffect, useState } from 'react';
import Container from '../../components/Shared/Container';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Shared/Loader';

const RoomDetails = () => {
    const { id } = useParams()
    const [room, setRoom] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('./rooms.json')
            .then(res => res.json())
            .then(data => {
                const singleRoom = data.find(room => room.id === id);
                setRoom(singleRoom)
                setLoading(false)
            })
    }, [id])

    if (loading) return <Loader></Loader>

    return <Container>{room?.title}</Container>
};

export default RoomDetails;