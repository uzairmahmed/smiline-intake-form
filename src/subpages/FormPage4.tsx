import React from 'react';
import { Formik, Form } from 'formik';
import { Button } from '@nextui-org/react';
import * as Yup from 'yup';
import {QuestionWithDetails, QuestionWithInput, QuestionWithCheckboxes, QuestionWithoutDetails} from '../components';

// Validation schema for page 2
const page4Schema = Yup.object().shape({
    seriousInjury: Yup.string().required('Please select if you had a serious injury'),
    seriousInjuryDetails: Yup.string().required('Please provide details about the injury'),
    lastMedicalCheckup: Yup.string().required('Please provide the date of your last medical checkup'),
    allergies: Yup.array(),
    otherAllergies: Yup.string().required('Please specify your other allergies'),
    conditions: Yup.array(),
    otherConditions: Yup.string().required('Please specify your other conditions'),
    conditionsExplanation: Yup.string(),
    smoking: Yup.string().required('Please indicate if you smoke or chew tobacco products'),
});

interface FormPage4Props {
    initialValues: {
        seriousInjury: string;
        seriousInjuryDetails: string;
        lastMedicalCheckup: string;
        allergies: string[];
        otherAllergies: string;
        conditions: string[];
        otherConditions: string;
        conditionsExplanation: string;
        smoking: string;
    };
    onNext: (values: any) => void;
    onBack: () => void;
}

const FormPage4: React.FC<FormPage4Props> = ({ initialValues, onNext, onBack }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={page4Schema}
            onSubmit={(values) => onNext(values)}
        >
            {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit} className="flex flex-col h-full justify-between">
                    <div className="grid grid-cols-12 gap-10 w-full">
                        <div className="col-span-12 grid grid-cols-12 gap-4 items-center">
                            <h1 className="col-span-12 text-center font-semibold">MEDICAL HISTORY</h1>
                        </div>
                        <QuestionWithDetails
                            question="Have you had a serious injury in the past?"
                            name="seriousInjury"
                            detailName="seriousInjuryDetails"
                        />

                        <QuestionWithInput
                            question="When was your last medical checkup?"
                            name="lastMedicalCheckup"
                        />

                        <QuestionWithCheckboxes
                            question="Are you allergic to or have reacted adversely to any of the following? (Select All That Apply)"
                            name="allergies"
                            otherName="otherAllergies"
                            options={[
                                'Latex or Rubber Materials',
                                'Penicillin or other Antibiotics',
                                'Local anesthetics',
                                'Codeine or other Narcotics',
                                'Sulfa Drugs',
                                'Barbiturates, Sedatives, or Sleeping Pills',
                                'Aspirin',
                            ]}
                        />
                        <QuestionWithCheckboxes
                            question="Do you have or have you had any of the following? (Select All That Apply)"
                            name="conditions"
                            otherName="otherConditions"
                            options={[
                                'Asthma',
                                'Allergies or Hives',
                                'Hay Fever or Sinus Problems',
                                'High or Low Blood Pressure',
                                'Heart Valve Replacement, Heart Pain/Angina, Heart Murmur',
                                'Infective Endocarditis (infection of the heart), Congenital Heart Disease (heart condition from birth)',
                                'Heart Transplant',
                                'Pacemaker',
                                'Prosthetic or Artificial Joint',
                                'Immune System - Leukemia, AIDS, HIV, Radiotherapy, Chemotherapy',
                                'Hepatitis, Jaundice, Liver Disease',
                                'Anemia or Bleeding Disorder',
                                'Rheumatic Fever or Rheumatic Heart Disease',
                                'Tuberculosis or Other lung Problems',
                                'Kidney Disease',
                                'Cancer',
                                'Stroke',
                                'Diabetes',
                                'Herpes or Cold Sores',
                                'Epilepsy, Seizures, or fainting spells',
                                'Arthiritis',
                                'Migraine headaches or frequent headaches',
                                'Psychological conditions (Depression, Bipolar Disorder, Anorexia, Bulimia, etc.',
                                'Drug, Alcohol, or Cannabis use of dependency',
                                'Osteoporosis',
                            ]}
                        />
                        <QuestionWithInput name='conditionsExplanation' question='If so, please explain.' />

                        <QuestionWithoutDetails
                            question="Do you smoke or chew tobacco products?"
                            name="smoking"
                        />

                    </div>

                    <div className="flex justify-between space-x-4 mt-10">
                        <Button onClick={onBack} color="default">
                            Back
                        </Button>

                        <Button type="submit" color="primary">
                            Next
                        </Button>
                    </div>


                </Form>
            )}
        </Formik>
    );
};

export default FormPage4;
