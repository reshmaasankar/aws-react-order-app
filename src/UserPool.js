import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'ap-south-1_PKYbmGdVt',
    ClientId: '735g32cmih286fprja0r7e960q'
};

export default new CognitoUserPool(poolData);