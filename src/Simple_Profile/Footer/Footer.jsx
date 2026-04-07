import "./Footer.less"

function Footer() {
    return (
        <footer className="simple-footer">
            <p>© {new Date().getFullYear()} Kiruhtika. All rights reserved.</p>
            <table className="new">
                <tr >
                    <td className="n">Contact</td>
                    <td> :</td>
                    <td>9363594725</td>
                </tr>
                <tr >
                    <td className="n">Email</td>
                    <td> :</td>
                    <td>kiruthikaarul25@gmail.com</td>
                </tr>
            </table>
        </footer>
    );
}
export default Footer