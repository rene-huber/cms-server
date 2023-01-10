import { buildConfig } from 'payload/config';
import Media from './collections/Media';
import Posts from './collections/Posts';
import Users from './collections/Users';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Posts,
    Media,
    
    // Add Collections here
    // Examples
  ],
});
