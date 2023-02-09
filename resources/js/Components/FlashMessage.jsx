export default function FlashMessage({ className, message = "" }) {
    return (
        <div
            className={`m-5 flex bg-green-200 rounded-[10px] p-4 mb-4 font-play text-lg text-green-700 ${className}`}
        >
            {message}
        </div>
    );
}
