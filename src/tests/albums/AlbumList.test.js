import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import AlbumList from '../../albums/AlbumList';
import AlbumCard from '../../albums/AlbumCard';

describe('<AlbumCard />', () => {
    let shallow;

    beforeEach(() => {
        shallow = createShallow();
    });

    it('renders the specified albums', () => {
        const albums = [{
            id: 1,
            title: 'album1',
        },{
            id: 2,
            title: 'album2',
        }];

        const wrapper = shallow(<AlbumList albums={albums} isFetching={false} fetchAlbums={() => {}} />).dive();

        const albumCards = wrapper.find(AlbumCard);

        expect(albumCards.length).toEqual(2);
        expect(albumCards.at(0).key()).toEqual('1');
        expect(albumCards.at(1).key()).toEqual('2');
    });
});