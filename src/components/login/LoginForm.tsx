import {
    Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    useColorModeValue,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { LoginRequest } from '../../dtos/Login';
import { BRAND_NAME } from '../../constants';

type LoginFormProps = {
    handleForm: (values: LoginRequest) => void;
};

export const LoginForm = ({ handleForm }: LoginFormProps) => {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm<LoginRequest>();

    const onSubmit = (values: LoginRequest) => {
        handleForm(values);
    };

    return (
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
            <Stack mb={8}>
                <Heading fontSize={'4xl'} color="blue.700">
                    {BRAND_NAME}
                </Heading>
            </Stack>
            <Stack spacing={4}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl id="username" isInvalid={!!errors.email}>
                        <FormLabel htmlFor="username">Email</FormLabel>
                        <Input
                            type="text"
                            {...register('email', {
                                required: 'Email is required',
                            })}
                        />
                        <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl id="password" isInvalid={!!errors.password}>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input
                            type="password"
                            {...register('password', {
                                required: 'Password is required',
                            })}
                        />
                        <FormErrorMessage>
                            {errors.password && errors.password.message}
                        </FormErrorMessage>
                    </FormControl>
                    <Stack spacing={10}>
                        {/* <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'start'}
                            justify={'space-between'}
                        >
                            <Checkbox>Recuérdame</Checkbox>
                            <Link color={'blue.400'}>¿Has olvidado tu contraseña?</Link>
                        </Stack> */}
                        <Button
                            bg={'blue.700'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.600',
                            }}
                            type="submit"
                            mt={8}
                            isLoading={isSubmitting}
                            isDisabled={isSubmitting}
                        >
                            Log In
                        </Button>
                    </Stack>
                </form>
            </Stack>
        </Box>
    );
};
