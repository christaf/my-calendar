import Connection from '../index';
import User from '../../Models/user/user';

describe('Connection', () => {
    describe('findUserByEmail', () => {

        it('should be a function', () => {
            const connection = Connection.getInstance();
            expect(connection.findUserByEmail).toBeInstanceOf(Function);
        });

        it('should find a user by email', async () => {
            const connection = Connection.getInstance();
            connection.selectDataFromDB = jest.fn().mockResolvedValue({
                result: [
                    {
                        id: 1,
                        name: 'Test User',
                        email: 'test@example.com',
                    }
                ]
            });
            const email = 'test@example.com';
            const user = await connection.findUserByEmail(email);
            expect(user).toBeInstanceOf(User);
            expect(user?.email).toBe(email);
        });

        it('should handle missing data gracefully', async () => {
            const connection = Connection.getInstance();
            connection.selectDataFromDB = jest.fn().mockResolvedValue({
                result: []
            });
            const email = 'nonexistent@example.com';
            const user = await connection.findUserByEmail(email);

            expect(user).toBeNull();
        });
    });
})
