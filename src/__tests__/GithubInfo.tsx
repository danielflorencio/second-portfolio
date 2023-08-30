import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
// import GitInfo from '@/sectionLayouts/GitInfo/Index';
import GithubInfoApolloWrapper from '../sectionLayouts/GitInfo/ApolloWrapper';

it('Renders the section, ', () => {
    render(<GithubInfoApolloWrapper/>);
})