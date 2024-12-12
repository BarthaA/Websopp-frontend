import "../styles/pageStyles/_login.scss";
import Footer from "../sections/Footer";
import Input from "../components/input";

const Login = () => {
    return (
        <>
            <div
                id="login-wrapper"
                className="pl-20 w-screen h-screen bg-gray-300"
            >
                <h1 className="text-black text-5xl font-bold text-center pt-10 pb-2 mb-8">
                    Welcome back!
                </h1>
                <form method="post" className="flex flex-col w-80 m-auto">
                    <p className="font-medium text-lg">Username</p>
                    <Input
                        type="text"
                        name="username"
                        id="usernameInput"
                        placeholder="Enter your username"
                    />
                    <p className="font-medium text-lg">Password</p>
                    <Input
                        type="password"
                        name="password"
                        id="passwordInput"
                        placeholder="Enter your password"
                    />
                    <div className="remember-forgot flex justify-evenly">
                      <div className="flex flex-row gap-1">
                        <input type="checkbox" name="remember-me" id="remember-me-cb" className="accent-orange-500 text-white" />
                        <p className="text-gray-600">Remember me?</p>
                      </div>
                      <a href="/forgot-password" className="text-gray-600 hover:text-orange-400">Forgot password?</a>
                    </div>
                    <button
                        type="submit"
                        className="p-2 mt-4 text-center font-bold text-xl
                        bg-orange-500 rounded-xl border-orange-300
                        hover:bg-orange-600 text-white"
                    >
                        Login
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Login;
