import { useFormik } from 'formik'
import * as Yup from 'yup'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function SignupForm() {
	//init formState
	const initFormState = {
		username: '',
		email: '',
		gender: '',
		dateOfBirth: '',
		agreeToTerms: false,
	}

	// define your schema used for validation
	const yupSchema = Yup.object({
		username: Yup.string()
			.max(15, 'Username cannot be more that 15 chars in length')
			.required('Username is mandatory'),
		email: Yup.string()
			.email('Provide a valid email')
			.required('Email is mandatory'),
		gender: Yup.string().required('Gender must be provided'),
		dateOfBirth: Yup.date()
			.nullable()
			.max(new Date(), 'Date of birth cannot be in the future')
			.required('Date of birth is mandatory'),
		agreeToTerms: Yup.boolean().oneOf(
			[true],
			'Must agree to terms and conditions'
		),
	})

	const formObject = useFormik({
		initialValues: initFormState,
		validationSchema: yupSchema,
		onSubmit: (formValue) => console.log(formValue),
	})

	//
	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-100'>
			<form
				className='bg-white p-8 rounded-2xl shadow-md w-full max-w-md'
				onSubmit={formObject.handleSubmit}>
				<h2 className='text-2xl font-bold mb-6 text-center'>Sign Up</h2>

				{/* Username */}
				<div className='mb-4'>
					<label
						htmlFor='username'
						className='block text-gray-700 font-semibold mb-1'>
						Username
					</label>
					<input
						id='username'
						name='username'
						type='text'
						className='w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
						value={formObject.values.username}
						onChange={formObject.handleChange}
						onBlur={formObject.handleBlur}
					/>
					{formObject.touched.username && formObject.errors.username ? (
						<div className='text-sm font-semibold text-red-400 py-1 mb-1'>
							{formObject.errors.username}
						</div>
					) : null}
				</div>

				{/* Email */}
				<div className='mb-4'>
					<label
						htmlFor='email'
						className='block text-gray-700 font-semibold mb-1'>
						Email
					</label>
					<input
						id='email'
						name='email'
						type='email'
						className='w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
						value={formObject.values.email}
						onChange={formObject.handleChange}
						onBlur={formObject.handleBlur}
					/>
					{formObject.touched.email && formObject.errors.email ? (
						<div className='text-sm font-semibold text-red-500 py-1 mb-1'>
							{formObject.errors.email}
						</div>
					) : null}
				</div>
				{/* date of birth */}
				<div className='mb-4'>
					<label
						htmlFor='dateOfBirth'
						className='block text-gray-700 font-semibold mb-1'>
						Date of birth
					</label>
					<DatePicker
						className='w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
						name='dateOfBirth'
						showYearDropdown
						scrollableYearDropdown
						yearDropdownItemNumber={100}
						dateFormat='dd-MM-yyyy'
						maxDate={new Date()}
						selected={formObject.values.dateOfBirth}
						onChange={(date) => formObject.setFieldValue('dateOfBirth', date)}
						onBlur={formObject.handleBlur}
					/>
					{formObject.touched.dateOfBirth && formObject.errors.dateOfBirth ? (
						<div className='text-sm font-semibold text-red-500 py-1 mb-1'>
							{formObject.errors.dateOfBirth}
						</div>
					) : null}
				</div>

				{/* Gender */}
				<div className='mb-6'>
					<label className='block text-gray-700 font-semibold mb-1'>
						Gender
					</label>
					<div
						className='flex items-center space-x-4'
						role='group'
						aria-labelledby='radio-group'>
						<label className='inline-flex items-center'>
							<input
								type='radio'
								name='gender'
								value='male'
								className='form-radio text-blue-500'
								onChange={formObject.handleChange}
								onBlur={formObject.handleBlur}
								checked={formObject.values.gender === 'male'}
							/>
							<span className='ml-2'>Male</span>
						</label>
						<label className='inline-flex items-center'>
							<input
								type='radio'
								name='gender'
								value='female'
								className='form-radio text-pink-500'
								onChange={formObject.handleChange}
								onBlur={formObject.handleBlur}
								checked={formObject.values.gender === 'female'}
							/>
							<span className='ml-2'>Female</span>
						</label>
						<label className='inline-flex items-center'>
							<input
								type='radio'
								name='gender'
								value='other'
								className='form-radio text-gray-500'
								onChange={formObject.handleChange}
								onBlur={formObject.handleBlur}
								checked={formObject.values.gender === 'other'}
							/>
							<span className='ml-2'>Other</span>
						</label>
					</div>
					{formObject.touched.gender && formObject.errors.gender ? (
						<div className='text-sm font-semibold text-red-500 py-1 mb-1'>
							{formObject.errors.gender}
						</div>
					) : null}
				</div>

				{/*  Agree to terms */}
				<div className='mb-6'>
					<label
						className='flex items-center justify-start gap-2 text-gray-700 font-semibold 
                        mb-1'>
						<input
							type='checkbox'
							name='agreeToTerms'
							checked={formObject.values.agreeToTerms}
							onChange={formObject.handleChange}
						/>
						I Agree to Terms and Conditions
					</label>
					{formObject.touched.agreeToTerms && formObject.errors.agreeToTerms ? (
						<div className='text-sm font-semibold text-red-500 py-1 mb-1'>
							{formObject.errors.agreeToTerms}
						</div>
					) : null}
				</div>

				{/* Submit Button */}
				<button
					// disabled={!formObject.values.agreeToTerms}
					type='submit'
					className='w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 
                        px-4 rounded-xl transition duration-300 disabled:bg-blue-300'>
					Register
				</button>
			</form>
		</div>
	)
}
