import React from "react";

import Error from "../error/error";

// Компонент представляет собой предохранитель, который отлавливает ошибки в дочерних компонентах
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
        }
    }

    static getDerivedStateFromError() {
        return { error: true }
    }

    render() {
        return this.state.error ? <Error/> : this.props.children
    }
}

export default ErrorBoundary;