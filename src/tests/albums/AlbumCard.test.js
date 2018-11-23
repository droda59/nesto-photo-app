import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMount } from '@material-ui/core/test-utils';
import AlbumCard from '../../albums/AlbumCard';

describe('<AlbumCard />', () => {
    let mount;

    beforeEach(() => {
        mount = createMount();
    });

    it('renders the specified album', () => {
        const album = {
            id: 1,
            title: 'album1',
        };

        const wrapper = mount(<Router><AlbumCard album={album}/></Router>);

        const title = wrapper.find('h2');

        expect(title.text()).toEqual('album1');
    });
});