export default function ApplicationLogo(props) {
    const bgimage = {
        backgroundImage:'url(/storage/img/logo.jpg)',
        backgroundSize: 'cover'
    }

    return (
        <>
            <div>
                <img src="storage/img/logo.jpg" className="rounded-full h-[70px]"/>
            </div>
        </>
    );
}
