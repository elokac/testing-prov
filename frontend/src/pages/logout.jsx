import Container from "../components/dashboard/Container";
import ConfirmLogout from "../components/confirm-logout"

const Logout = () => {
    return (
        <Container title="Confirm Logout">
            {() => (
                <ConfirmLogout />
            )}
        </Container>
    )
}

export default Logout