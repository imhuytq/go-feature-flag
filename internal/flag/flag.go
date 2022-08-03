package flag

import (
	"github.com/thomaspoignant/go-feature-flag/ffuser"
)

type Flag interface {
	// Value is returning the Value associate to the flag (True / False / Default )
	Value(flagName string, user ffuser.User, evaluationCtx EvaluationContext) (interface{}, ResolutionDetails)

	// String display correctly a flag with the right formatting
	String() string

	// GetVersion is the getter for the field Version
	// Default: 0.0
	GetVersion() string

	// IsTrackEvents is the getter of the field TrackEvents
	// Default: true
	IsTrackEvents() bool

	// IsDisable is the getter for the field Disable
	// Default: false
	IsDisable() bool

	// GetVariationValue return the value of variation from his name
	GetVariationValue(name string) interface{}
}