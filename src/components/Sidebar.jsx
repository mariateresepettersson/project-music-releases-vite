import { IconButtons } from './children/IconButtons';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SideBarContainer = styled.div`

.playlists {
  margin: 0;
  height: fit-content;
}

.cover-image-wrapper {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.cover-image {
  max-width: 100%;
  height: auto;
  display: block;
  filter: brightness(1);
  transition: filter 0.3s ease;
}

.cover-image-wrapper:hover .cover-image {
  filter: brightness(0.4);
}

a {
  text-decoration: none;
}

h2 {
  color: white;
  font-family: Helvetica, sans-serif;
  font-size: 16px;
  margin: 10px 0 0 0;
  text-align: left;

  &:hover {
    text-decoration: underline;
  }
}
`;


export const Sidebar = ({ playlistData }) => {
  return (
    <SideBarContainer className="sidebar-container">
      {playlistData.map((playlist) => ( // Maps over the playlists array and adds the correct url and name for each condition.
        <div className="playlists" key={playlist.id}>
          <span className="cover-image-wrapper">
            <a href={playlist.external_urls.spotify}><img className="cover-image" src={playlist.images[0].url} alt={playlist.name} /></a>
            <IconButtons />
          </span>
          <a href={playlist.external_urls.spotify} className="playlist-name"><h2>{playlist.name}</h2></a>
        </div>
      ))}
    </SideBarContainer>
  )
}

Sidebar.propTypes = {
  playlistData: PropTypes.array.isRequired,
};