export const capitalIcon = (fill,s) => {
    return(

        <svg fill={fill} width={s} height={s}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.528 40.528">
            <path  d="M20.264,0C11.749,0,4.847,6.903,4.847,15.417c0,5.054,5.432,14.649,9.847,21.613
    c2.957,4.664,8.183,4.664,11.14,0c4.415-6.965,9.847-16.559,9.847-21.613C35.681,6.902,28.779,0,20.264,0z M20.264,22.667
    c-4.234,0-7.667-3.433-7.667-7.667s3.433-7.667,7.667-7.667s7.667,3.433,7.667,7.667S24.498,22.667,20.264,22.667z"/>
        </svg>
    )
}

export const searchIcon = () => {
    return(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
        </svg>
    )
}

export const githubIcon = (fill,s) => {
    return(

        <svg width={s} height={s} fill={fill}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
            <path  d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z" />
        </svg>
    )
}