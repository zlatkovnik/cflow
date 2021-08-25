export default class DomainService {
    private static instance: DomainService | null = null;
    static get() {
        if (!DomainService.instance) {
            DomainService.instance = new DomainService();
        }
        return DomainService.instance;
    }

    getEndpoint() {
        return 'http://localhost:3030';
    }
}