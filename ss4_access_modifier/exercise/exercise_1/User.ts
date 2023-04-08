class User {
    protected name: number;
    protected email: string;
    public role: number;

    getInfo() {
        return `${this.name} - ${this.email} - ${this.isAdmin()}`;
    }

    isAdmin() {
        return this.role == 1 ? 'admin' : 'user';
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    getRole() {
        return this.role;
    }

    setRole(role) {
        this.role = role;
    }
}

