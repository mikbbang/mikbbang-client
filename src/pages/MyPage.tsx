import CenterAlignedPage from '../components/templates/CenterAlignedPage';
import useUser from '../hooks/useCurrentUser';


function MyPage(): JSX.Element {
    const user = useUser();

    return (
        <CenterAlignedPage>
            <div>
                <h1 style={{color: 'white'}}>{user?.id}</h1>
                <h1 style={{color: 'white'}}>{user?.username}</h1>
            </div>
        </CenterAlignedPage>
    );
}

export default MyPage;